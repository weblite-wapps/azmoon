const Router = require('@koa/router')
const { getSchools } = require('../models/user')

const router = new Router()
  .get('/', async ctx => {
    ctx.body = await getSchools(ctx.request.query)
  })

module.exports = router
