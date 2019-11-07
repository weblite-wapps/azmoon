const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    school: String,
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

const User = model('User', userSchema)

module.exports.getUserById = id =>
  User.findById(id).select('-createdAt -updatedAt').lean()

module.exports.updateUser = (_id, fields) =>
  User.updateOne({ _id }, { $set: fields }, { upsert: true }).exec()
