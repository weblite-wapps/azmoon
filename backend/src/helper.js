const R = require("ramda");
const { startExamAnalysis, endExamAnalysis } = require("./models/exam");
const { updateQuestionStats } = require("./models/question");
const { getResultsByExam } = require("./models/result");

// if result is not saved, `exam.result` will return `{}`
module.exports.shouldAnalyze = exam =>
  exam &&
  (exam.result == null || exam.result.count == null) &&
  new Date(exam.endTime) < new Date();

const prefixStats = stats =>
  R.reduce(
    (acc, key) => ({
      ...acc,
      [`stats.${key}`]: stats[key]
    }),
    {},
    R.keys(stats)
  );

module.exports.analyze = async examId => {
  const exam = await startExamAnalysis(examId);
  if (!exam) return; // analyzing or analyzed

  console.log('Analysis started for', examId)

  const results = await getResultsByExam(examId);
  if (!results.length) return;

  const { questions } = exam;
  const questionCount = questions.length;
  const qStats = R.times(
    () => ({
      correct: 0,
      wrong: 0,
      white: 0,
      dur: 0
    }),
    questionCount
  );
  const percents = [];
  results.forEach(result => {
    let corrects = 0;
    let wrongs = 0;
    for (let i = 0; i < questionCount; i++) {
      const { opt, dur } = result.answers[i] || {};
      if (opt == null) {
        qStats[i].white += 1;
      } else {
        if (opt === questions[i].correct) {
          corrects += 1;
          qStats[i].correct += 1;
        } else {
          wrongs += 1;
          qStats[i].wrong += 1;
        }
      }
      if (dur) qStats[i].dur += dur;
    }

    const percent = ((3 * corrects - wrongs) * 100) / 3 / questionCount;
    result.percent = percent;
    result.save();
    percents.push(percent);
  });

  await Promise.all(
    questions.map((q, i) => updateQuestionStats(q, prefixStats(qStats[i])))
  );

  await endExamAnalysis(examId, {
    count: percents.length,
    min: Math.min(100, ...percents),
    max: Math.max(-34, ...percents),
    avg: R.sum(percents) / percents.length
  });

  console.log('Analysis ended for', examId)
};

module.exports.isExamRunning = async examId => {
  const exam = await getExamTimesById(examId);
  const now = new Date();
  return exam && now > exam.startTime && now < exam.endTime;
};
