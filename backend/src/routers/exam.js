const Router = require('@koa/router')
const R = require('ramda')

const { createExam, getExamById } = require('../models/exam')
const { getParticipantsCount } = require('../models/result')
const { shouldAnalyze, analyze } = require('../helper')

const router = new Router()
  .post('/new', async ctx => {
    const exam = ctx.request.body
    if (!exam.title || !exam.creatorId)
      return ctx.status = 400

    ctx.body = await createExam(R.pick([
      '_id',
      'title',
      'section',
      'questions',
      'startTime',
      'endTime',
      'duration',
      'creatorId',
    ], exam))
  })
  .get('/:id', async ctx => {
    const exam = await getExamById(ctx.params.id)
    ctx.body = exam
    if (shouldAnalyze(exam)) analyze(exam._id)
  })
  .get('/:id/count', async ctx => {
    ctx.body = await getParticipantsCount(ctx.params.id)
  })

module.exports = router
