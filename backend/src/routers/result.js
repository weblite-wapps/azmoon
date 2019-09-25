const Router = require("@koa/router");

const { getResult, startExam, saveOption } = require("../models/result");

const router = new Router()
  .get("/", async ctx => {
    const { stdId, examId } = ctx.query;
    ctx.body = await getResult(stdId, examId);
  })
  .post("/start", async ctx => {
    await startExam(ctx.request.body);
    ctx.status = 200;
  })
  .post("/saveOption", async ctx => {
    ctx.body = await saveOption(ctx.request.body);
  });

module.exports = router;
