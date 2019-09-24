const { Schema, model } = require('mongoose')

const resultSchema = new Schema(
  {
    exam: { type: Schema.Types.ObjectId, ref: 'Exam' },
    stdId: Schema.Types.ObjectId,
    answers: [{ opt: Number, dur: Number }],

    percent: Number,

    startTime: Date,
    endTime: Date,
    duration: Number, // in millis
  },
  {
    timestamps: true,
  },
)

resultSchema.index({ exam: 1, percent: -1 })
resultSchema.index({ stdId: 1, exam: 1 })

const Result = model('Result', resultSchema)

module.exports.addResult = result => {
  const { stdId, exam } = result
  return Result.updateOne(
    { stdId, exam },
    { $set: result },
    { upsert: true },
  ).exec()
}

module.exports.getResultsByExam = exam =>
  Result.find({ exam })
    .sort('-percent')

module.exports.getResult = (stdId, exam) =>
  Result.findOne({ stdId, exam })
    .lean()
