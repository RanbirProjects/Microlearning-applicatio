const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  order: { type: Number, required: true },
});

module.exports = mongoose.model('Lesson', LessonSchema); 