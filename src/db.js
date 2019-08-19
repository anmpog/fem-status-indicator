const mongoose = require('mongoose')
const MONGODB_URL_DEV = 'mongodb://localhost:27017/fem-state-db'

mongoose.connect(process.env.MONGODB_URL || MONGODB_URL_DEV, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log(`Database connection successful.`))
  .catch(err => console.log(`Not connected to database:`, err))

