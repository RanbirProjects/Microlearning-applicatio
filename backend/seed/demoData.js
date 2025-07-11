const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
const Document = require('../models/Document');
const Class = require('../models/Class');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/microlearning';

const seed = async () => {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  await Lesson.deleteMany({});
  await Document.deleteMany({});
  await Class.deleteMany({});

  const lessons = await Lesson.insertMany([
    { title: 'Welcome to Microlearning', content: 'This is your first bite-sized lesson!', duration: 2, order: 1 },
    { title: 'Why Microlearning?', content: 'Microlearning helps you learn quickly and efficiently.', duration: 3, order: 2 },
    { title: 'Get Started', content: 'Explore lessons, documents, and classes using the tabs.', duration: 2, order: 3 },
  ]);

  const documents = await Document.insertMany([
    { title: 'Microlearning Guide', description: 'A quick guide to microlearning.', url: 'https://example.com/guide.pdf' },
    { title: 'Best Practices', description: 'Tips for effective microlearning.', url: 'https://example.com/best-practices.pdf' },
  ]);

  const classes = await Class.insertMany([
    { name: 'Demo Class', description: 'A sample class with demo lessons.', lessons: [lessons[0]._id, lessons[1]._id] },
    { name: 'Quick Start', description: 'Get started with microlearning.', lessons: [lessons[2]._id] },
  ]);

  console.log('Demo data seeded!');
  mongoose.disconnect();
};

seed(); 