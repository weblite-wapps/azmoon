const R = require('ramda')
const { Schema, model } = require('mongoose')

const { createQuestions } = require('./question')

const examSchema = new Schema(
  {
    title: String,
    section: String,
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question', index: true }],
    startTime: Date,
    endTime: Date,
    duration: Number, // in millis
    creatorId: Schema.Types.ObjectId,

    analyzing: Date,
    result: {
      count: Number,
      min: Number,
      max: Number,
      avg: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

examSchema.index({ creatorId: 1, createdAt: -1 })

const Exam = model('Exam', examSchema)

module.exports.createExam = exam =>
  createQuestions(exam.questions.map(R.assoc('creatorId', exam.creatorId)))
    .then(questions => Exam.create({ ...exam, questions })
      .then(doc => doc._id),
    )

module.exports.getExamById = (id, populate = true) => {
  const query = Exam.findById(id)
    .select('-createdAt -updatedAt -analyzing')
    .lean()

  return populate ? query.populate('questions', '-createdAt -updatedAt -creatorId') : query
}

module.exports.getExamsByCreator = creatorId =>
  Exam.find({ creatorId })
    .sort('-createdAt')
    .select('-analyzing')
    .lean()

module.exports.isCreatorOfExam = (examId, creatorId) =>
  Exam.find({ _id: examId, creatorId })
    .select('-_id examId')
    .lean()

module.exports.updateExam = (examId, updated) =>
  Exam.updateOne({ _id: examId }, { $set: updated }).exec()

const MAX_ANALYSIS_TIME = 60 * 1000
module.exports.startExamAnalysis = examId =>
  Exam.findOneAndUpdate({
    _id: examId,
    analyzing: {
      $or: [
        { $exists: false },
        { $lt: new Date(Date.now() - MAX_ANALYSIS_TIME) },
      ],
    },
    result: { $exists: false },
    endTime: { $lt: new Date() },
  }, { analyzing: Date.now() })
    .populate('questions', 'correct')

module.exports.endExamAnalysis = (examId, result) =>
  Exam.updateOne({ _id: examId }, {
    $unset: { analyzing: '' },
    $set: { result },
  }).exec()
