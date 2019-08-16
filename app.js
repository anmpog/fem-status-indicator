const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
require('./src/db.js')
const State = require('./src/state.js')
const port = process.env.PORT || 3001



app.use(express.static('public'))
app.use(express.json())



app.get('/test', async (req, res) => {
  try {
    const currentUser = await State.find()
    res.send(currentUser)
  } catch (err) {
    console.log('There was an error fetching the current user: ', err)
    res.status(400)
    res.send(err)
  }
})

app.put('/test', async (req, res) => {
  // Store new user from request
  // Get 'current user' value from DB and store in var
  // Use updateOne() to pass new user string value 
  console.log('request body: ', req.body)
  try {
    const newUser = req.body.user
    console.log('new user: ', newUser)
    const currentUser = await State.find()
    console.log('current user: ', currentUser)
    await State.updateOne({ user: currentUser[0].user }, { user: newUser })
    res.status(200)
    res.send()
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