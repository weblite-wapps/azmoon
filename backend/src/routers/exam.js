const Router = require('@koa/router')
const R = require('ramda')

const { createExam, getExamById } = require('../models/exam')
const { analyze } = require('../helper')

const router = new Router()
  .post('/new', async ctx => {
    const exam = ctx.request.body
    console.log('exam', exam)
    if (!exam.title || !exam.creatorId)
      return ctx.status = 400

    ctx.body = await createExam(R.pick([
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
    try {
      const exam = await getExamById(ctx.params.id)
      ctx.body = exam
      if (!exam.result) analyze(exam._id)
    } catch {
      ctx.status = 400 // Bad Request
    }
  })

module.exports = router