const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
});

const Survey = mongoose.model('surveys', surveySchema);

module.exports = Survey;
