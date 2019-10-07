const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const config = require('./config.js')
const router = require('../routers')

const app = new Koa().use(
  cors({
    // origin: 'https://www.weblite.me:3000'
  }),
)
  // .use((ctx, next) => {
  //   console.log(ctx.request)
  //   next()
  // })
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.server.port, () =>
  console.log(`> server successfully started on port ${config.server.port}!`)
)
