const Router = require('@koa/router')

const { getUserById, updateUser } = require('../models/user')

const router = new Router()
  .get('/:id', async ctx => {
    ctx.body = await getUserById(ctx.params.id)
  })
  .post('/:id', async ctx => {
    await updateUser(ctx.params.id, ctx.request.body)
    ctx.status = 200
  })

module.exports = router
