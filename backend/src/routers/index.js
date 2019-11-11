const Router = require('@koa/router')
const user = require('./user')
const exam = require('./exam')
const result = require('./result')
const school = require('./school')

const router = new Router()
  .use('/api/user', user.routes())
  .use('/api/exam', exam.routes())
  .use('/api/result', result.routes())
  .use('/api/school', school.routes())

module.exports = router
