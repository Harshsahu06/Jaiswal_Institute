const express = require('express');
const { registerStudent, getPendingRequests} = require('../controller/studentController');
const { getAcceptedStudents, getStudentById, acceptStudent } = require('../controller/AstdController');

const router = express.Router();

router.post('/register', registerStudent);
router.get('/requests', getPendingRequests);
router.post('/accept/:id', acceptStudent);
router.get('/accepted', getAcceptedStudents); // Get all accepted students with filters
router.get('/:id', getStudentById); // Get individual student details

module.exports = router;