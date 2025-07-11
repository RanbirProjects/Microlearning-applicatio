const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find().populate('lessons');
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single class by ID
router.get('/:id', async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id).populate('lessons');
    if (!classItem) return res.status(404).json({ error: 'Class not found' });
    res.json(classItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 