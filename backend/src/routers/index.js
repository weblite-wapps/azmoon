const Router = require('@koa/router')
const exam = require('./exam')
const result = require('./result')

const router = new Router()
  .use('/api/exam', exam.routes())
  .use('/api/result', result.routes())

module.exports = router
