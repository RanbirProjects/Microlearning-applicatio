const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes (to be added)
const lessonsRoutes = require('./routes/lessons');
const documentsRoutes = require('./routes/documents');
const classesRoutes = require('./routes/classes');
app.use('/api/lessons', lessonsRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/classes', classesRoutes);

app.get('/', (req, res) => {
  res.send('Microlearning App Backend Running');
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/microlearning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
}); 