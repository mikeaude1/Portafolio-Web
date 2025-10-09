const express = require('express');
const router = express.Router();
const students = require('../controllers/studentsController');

router.get('/', students.getStudents);
router.post('/', students.createStudent);
router.get('/:id', students.getStudentById);
router.put('/:id', students.updateStudent);
router.delete('/:id', students.deleteStudent);

module.exports = router;