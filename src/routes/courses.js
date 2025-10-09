const express = require('express');
const router = express.Router();
const courses = require('../controllers/coursesController');

router.get('/', courses.getCourses);
router.post('/', courses.createCourse);
router.get('/:id', courses.getCourseById);
router.put('/:id', courses.updateCourse);
router.delete('/:id', courses.deleteCourse);

router.post('/:courseId/enroll/:studentId', courses.enrollStudent);
router.post('/:courseId/withdraw/:studentId', courses.withdrawStudent);

module.exports = router;