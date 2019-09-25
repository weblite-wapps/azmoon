const Router = require('@koa/router')

const { getResult } = require('../models/result')

const router = new Router()
  .get('/', async ctx => {
    const { stdId, examId } = ctx.query
    ctx.body = await getResult(stdId, examId)
  })

module.exports = router
