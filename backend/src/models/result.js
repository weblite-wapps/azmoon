const { Schema, model } = require("mongoose");

const resultSchema = new Schema(
  {
    exam: { type: Schema.Types.ObjectId, ref: "Exam" },
    stdId: Schema.Types.ObjectId,
    school: String,
    answers: [{ opt: Number, dur: Number }],

    percent: Number,

    startTime: Date,
    endTime: Date,
    duration: Number // in millis
  },
  {
    timestamps: true
  }
);

resultSchema.index({ exam: 1, percent: -1 });
resultSchema.index({ stdId: 1, exam: 1 });

const Result = model("Result", resultSchema);

module.exports.addResult = result => {
  const { stdId, exam } = result;
  return Result.updateOne(
    { stdId, exam },
    { $set: result },
    { upsert: true }
  ).exec();
};

module.exports.getResultsByExam = exam =>
  Result.find({ exam }).sort("-percent");

module.exports.getParticipantsCount = exam => Result.countDocuments({ exam });

module.exports.getResult = (stdId, exam) =>
  Result.findOne({ stdId, exam }).lean();

module.exports.startExam = ({ stdId, exam, school }) =>
  Result.findOne({ stdId, exam })
    .select("-_id stdId")
    .lean()
    .then(
      result =>
        result ||
        Result.create({ exam, stdId, school, answers: [], startTime: new Date() })
    );

module.exports.endExam = ({ stdId, exam }) =>
  Result.updateOne({ stdId, exam }, { $set: { endTime: new Date() } }).exec();

// TODO: check `startTime: { $gt: now }, endTime: { $lt: now }` for exam
module.exports.saveOption = ({ stdId, exam, index, opt, dur }) =>
  Result.updateOne(
    { stdId, exam },
    { $set: { [`answers.${index}`]: { opt, dur } } }
  ).exec();
