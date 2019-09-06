require('dotenv').config()
const express = require('express')
const fs = require('fs')
const path = require('path')
const validate = require('./src/utils/validation')
const app = express()
const port = process.env.PORT || 3001
const readFile = require('util').promisify(fs.readFile)


// Config
app.use(express.static('public'))
app.use(express.json())
const userLog = path.join(__dirname, 'src', 'user.txt')




// Routes
app.get('/page-load', async (req, res) => {
  let currentUser
  try {
    readFile(userLog)
      .then(data => currentUser = data.toString())
      .then(() => {
        res.status(200)
        res.send({ currentUser })
      })
  } catch (err) {
    console.log(err)
    res.status(500)
    res.send(err)
  }
})

app.put('/manual-update', async (req, res) => {
  let newUser
  if (req.body.newUser) {
    newUser = validate(req.body.newUser)
  } else {
    newUser = 'none'
  }

  try {
    fs.writeFile(userLog, newUser, 'utf-8', (err) => {
      res.status(200)
      res.send({ newUser })
    })
  } catch (err) {
    console.log(err)
    res.status(500)
    res.send(err)
  }
})



// Is it alive?
app.listen(port, (err) => {
  if (err) {
    console.log('There was an error running the application: ', err)
  }
  console.log(`App is running on port ${port}`)
})