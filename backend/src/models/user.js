const { Schema, model } = require('mongoose')
const R = require("ramda");

const userSchema = new Schema(
  {
    province: String,
    county: String,
    school: String,
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

userSchema.index({ province: 1, county: 1, school: 1 })

const User = model('User', userSchema)

module.exports.getUserById = id =>
  User.findById(id).select('-createdAt -updatedAt').lean()

module.exports.updateUser = (_id, fields) =>
  User.updateOne({ _id }, { $set: fields }, { upsert: true }).exec()

module.exports.getSchools = (query) =>
  User.distinct('school', R.pick(['province', 'county'], query))
