const R = require('ramda')
const { startExamAnalysis, endExamAnalysis } = require('./models/exam')
const { updateQuestionStats } = require('./models/question')
const { getResultsByExam } = require('./models/result')

module.exports.shouldAnalyze = exam =>
  exam && !exam.result && new Date(exam.endTime) < new Date()

module.exports.analyze = async examId => {
  const exam = await startExamAnalysis(examId)
  if (!exam) return // analyzing or analyzed

  const results = await getResultsByExam(examId)
  if (!results.length) return

  const { questions } = exam
  const questionCount = questions.length
  const qStats = R.repeat({
    correct: 0,
    wrong: 0,
    white: 0,
    dur: 0,
  }, questionCount)
  const percents = []

  results.forEach(result => {
    let corrects = 0
    let wrongs = 0
    result.answers.forEach(({ opt, dur } = {}, i) => {
      if (opt == null) {
        qStats[i].white += 1
      } else {
        if (opt === questions[i].correct) {
          corrects += 1
          qStats[i].correct += 1
        } else {
          wrongs += 1
          qStats[i].wrong += 1
        }
      }
      if (dur) qStats[i].dur += dur
    })

    const percent = (3 * corrects - wrongs) * 100 / 3 / questionCount
    result.percent = percent
    result.save()
    percents.push(percent)
  })

  await Promise.all(questions.map((q, i) => updateQuestionStats(q, qStats[i])))

  return endExamAnalysis(examId, {
    count: percents.length,
    min: R.min(...percents),
    max: R.max(...percents),
    avg: R.sum(percents) / percents.length,
  })
}
