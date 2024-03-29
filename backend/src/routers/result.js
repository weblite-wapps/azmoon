const Router = require("@koa/router");

const {
  getResult,
  startExam,
  endExam,
  saveOption
} = require("../models/result");

const router = new Router()
  .get("/", async ctx => {
    const { stdId, examId } = ctx.query;
    ctx.body = await getResult(stdId, examId);
  })
  .post("/start", async ctx => {
    await startExam(ctx.request.body);
    ctx.status = 200;
  })
  .post("/end", async ctx => {
    await endExam(ctx.request.body);
    ctx.status = 200;
  })
  .post("/saveOption", async ctx => {
    await saveOption(ctx.request.body);
    ctx.status = 200
  });

module.exports = router;
