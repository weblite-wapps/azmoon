const { Schema, model, toObject } = require('mongoose')

const questionSchema = new Schema(
  {
    prob: String,
    probAttach: String,
    options: [String],
    correct: { type: Number, min: 0, max: 3 }, // index of `options`
    sol: String,
    solAttach: String,
    creatorId: Schema.Types.ObjectId,

    stats: {
      correct: Number,
      wrong: Number,
      white: Number,
      dur: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

questionSchema.index({ creatorId: 1, createdAt: -1 })

const Question = model('Question', questionSchema)

module.exports.createQuestion = question =>
  Question.create({
    ...question,
    stats: {
      correct: 0,
      wrong: 0,
      white: 0,
      dur: 0,
    },
  })
    .then(toObject)

module.exports.createQuestions = questions =>
  Question.insertMany(questions)
    .then(toObject)

module.exports.getQuestionsById = ids =>
  Question.find({ _id: { $in: ids } })
    .lean()

module.exports.getQuestionsByCreator = creatorId =>
  Question.find({ creatorId })
    .sort('-createdAt')
    .lean()

module.exports.updateQuestionStats = (questionId, stats) =>
  Question.updateOne({ _id: questionId }, { $inc: stats }).exec()
