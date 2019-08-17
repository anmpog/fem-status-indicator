require('dotenv').config()
const express = require('express')
const app = express()
require('./src/db.js')
const State = require('./src/state.js')
const port = process.env.PORT || 3001


// Config
app.use(express.static('public'))
app.use(express.json())



// Routes
app.get('/page-load', async (req, res) => {
  try {
    const currentUser = await State.find()
    res.send(currentUser)
  } catch (err) {
    console.error('There was an error fetching the current user: ', err)
    res.status(400)
    res.send(err)
  }
})

app.put('/manual-update', async (req, res) => {
  // Store new user from request
  // Get 'current user' value from DB and store in var
  // Use updateOne() to pass new user string value 
  try {
    const newUser = req.body.user
    const currentUser = await State.find()
    await State.updateOne({ user: currentUser[0].user }, { user: newUser })
    res.status(200)
    res.send({ user: newUser })
  } catch (err) {
    console.log('There was an error updating the current user: ', err)
    res.status(500)
    res.send(err)
  }
})



// Is it alive?
app.listen(port, (err) => {
  if (err) { console.log('There was an error running the application: ', err)}
  console.log(`App is running on port ${port}`)
})