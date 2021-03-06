// const mongoose = require('mongoose')
// const dbConfig = require('./dbconfig')
import mongoose from 'mongoose'
import dbconfig from './dbconfig.js'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbconfig.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

// module.exports = connectDB

export default connectDB
