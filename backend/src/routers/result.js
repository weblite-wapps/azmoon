const Router = require('@koa/router')

const { getResult } = require('../models/result')

const router = new Router()
  .get('/', async ctx => {
    try {
      const { stdId, examId } = ctx.query
      ctx.body = await getResult(stdId, examId)
    } catch {
      ctx.status = 400 // Bad Request
    }
  })

module.exports = router
