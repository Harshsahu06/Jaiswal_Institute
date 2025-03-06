const express = require('express');
const Student = require('../models/stdrequest');
const router = express.Router();

router.post('/register', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send({ message: 'Registration request submitted!' });
});

router.get('/', async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

router.put('/approve/:id', async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, { status: 'Approved' });
    res.send({ message: 'Student approved' });
});

module.exports = router;