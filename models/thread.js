const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamps = require('mongoose-timestamp')

const ThreadSchema = new mongoose.Schema(
  {
    // webhose_uuid: String,
    // url: String,
    // site_categories: Array,
    // section_title: String,
    title: String,
    text: String
  },
  { minimize: false }
)

ThreadSchema.plugin(timestamps)
ThreadSchema.plugin(mongooseStringQuery)

module.exports = mongoose.model('Thread', ThreadSchema, 'threads')
