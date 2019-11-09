const Router = require("@koa/router");
const R = require("ramda");

const { createExam, getExamById, updateExam } = require("../models/exam");
const { getParticipantsCount, getResultsByExam } = require("../models/result");
const { shouldAnalyze, analyze } = require("../helper");

const router = new Router()
  .post("/new", async ctx => {
    const exam = ctx.request.body;
    if (!exam.title || !exam.creatorId) return (ctx.status = 400);

    ctx.body = await createExam(
      R.pick(
        [
          "_id",
          "title",
          "section",
          "questions",
          "startTime",
          "endTime",
          "duration",
          "creatorId"
        ],
        exam
      )
    );
  })
  .get("/:id", async ctx => {
    const exam = await getExamById(ctx.params.id);
    if (!exam) return ctx.body = exam

    const now = new Date()
    const { startTime, endTime } = exam
    const examObj = R.mergeRight(exam.toObject(), {
      nowTime: now,
      isStarted: now > startTime,
      isEnded: now > endTime,
    })
    // don't return solutions if exam is not finished
    if (now < endTime) {
      delete examObj.result
      examObj.questions.forEach(q => {
        delete q.correct
        delete q.sol
        delete q.solAttach
        delete q.stats
      })
      return ctx.body = examObj
    }

    ctx.body = examObj

    if (shouldAnalyze(exam)) analyze(exam._id);
  })
  .get("/:id/count", async ctx => {
    ctx.body = await getParticipantsCount(ctx.params.id);
  })
  .post("/:id/start", async ctx => {
    await updateExam(ctx.params.id, { startTime: new Date() });
    ctx.status = 200;
  })
  .post("/:id/end", async ctx => {
    await updateExam(ctx.params.id, { endTime: new Date() });
    ctx.status = 200;
  })
  .get("/:id/results", async ctx => {
    ctx.body = await getResultsByExam(ctx.params.id);
  });

module.exports = router;
