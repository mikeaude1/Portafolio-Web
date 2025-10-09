const Course = require('../models/Course');
const Student = require('../models/Student');

exports.getCourses = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.max(1, parseInt(req.query.limit, 10) || 10);
    const search = (req.query.search || '').trim();
    const sort = (req.query.sort || 'name').trim();

    const filter = {};
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Course.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .populate('students', 'firstName lastName email'),
      Course.countDocuments(filter),
    ]);

    res.json({ items, total, page, limit, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('students', 'firstName lastName email');
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' });
    await Student.updateMany({ courses: course._id }, { $pull: { courses: course._id } });
    res.json({ message: 'Curso eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.enrollStudent = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;
    const course = await Course.findById(courseId);
    const student = await Student.findById(studentId);
    if (!course || !student) return res.status(404).json({ error: 'Curso o estudiante no encontrado' });

    if (!course.students.includes(student._id)) course.students.push(student._id);
    if (!student.courses.includes(course._id)) student.courses.push(course._id);

    await course.save();
    await student.save();
    res.json({ message: 'Inscripción realizada', course, student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.withdrawStudent = async (req, res) => {
  try {
    const { courseId, studentId } = req.params;
    const course = await Course.findById(courseId);
    const student = await Student.findById(studentId);
    if (!course || !student) return res.status(404).json({ error: 'Curso o estudiante no encontrado' });

    course.students = course.students.filter((sId) => sId.toString() !== student._id.toString());
    student.courses = student.courses.filter((cId) => cId.toString() !== course._id.toString());

    await course.save();
    await student.save();
    res.json({ message: 'Retiro realizado', course, student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};