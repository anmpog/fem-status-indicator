const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stateSchema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true
  }
})

const State = mongoose.model('State', stateSchema, 'stateObj')



module.exports = State