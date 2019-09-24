const mongoose = require('mongoose')
const config = require('./config')

const { url, options } = config.mongo
mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', console.error.bind(console, '> mongodb connection error:'))
mongoose.connection.once('open', () => console.log('> mongodb successfully connected!'))
