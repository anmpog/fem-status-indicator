const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})