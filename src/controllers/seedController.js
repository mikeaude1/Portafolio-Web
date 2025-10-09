const Student = require('../models/Student');
const Course = require('../models/Course');

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.seed = async (req, res) => {
  try {
    const countRaw = req.query.count ?? req.body?.count ?? 50;
    const count = Math.max(1, parseInt(countRaw, 10) || 50);
    const resetRaw = req.query.reset ?? req.body?.reset ?? 'true';
    const reset = String(resetRaw).toLowerCase() === 'true';

    if (reset) {
      await Promise.all([Student.deleteMany({}), Course.deleteMany({})]);
    }

    const courseCount = Math.floor(count / 2);
    const studentCount = count - courseCount;

    const courseNamesBase = [
      'Matemáticas', 'Historia', 'Ciencias', 'Física', 'Química', 'Biología', 'Programación', 'Arte', 'Música', 'Literatura',
      'Geografía', 'Economía', 'Filosofía', 'Deportes', 'Inglés', 'Francés', 'Álgebra', 'Cálculo', 'Robótica', 'Ética'
    ];
    const coursesPayload = Array.from({ length: courseCount }, (_, i) => ({
      name: courseNamesBase[i % courseNamesBase.length] + (i >= courseNamesBase.length ? ` ${i}` : ''),
      description: 'Curso generado automáticamente',
    }));

    const firstNames = ['Juan','María','Pedro','Lucía','Luis','Ana','Carlos','Sofía','Miguel','Elena','Jorge','Camila','Diego','Valeria','Andrés'];
    const lastNames = ['Pérez','García','López','Rodríguez','Fernández','Gómez','Martínez','Sánchez','Ramírez','Torres'];
    const studentsPayload = Array.from({ length: studentCount }, (_, i) => {
      const fn = randomChoice(firstNames);
      const ln = randomChoice(lastNames);
      return {
        firstName: fn,
        lastName: ln,
        email: `${fn.toLowerCase()}.${ln.toLowerCase()}.${i}@example.com`,
        courses: [],
      };
    });

    const createdCourses = await Course.insertMany(coursesPayload);
    const courseIds = createdCourses.map(c => c._id);

    // Asignar 0-2 cursos aleatorios a cada estudiante
    for (const student of studentsPayload) {
      const howMany = Math.floor(Math.random() * 3); // 0,1,2
      const picked = new Set();
      while (picked.size < howMany && courseIds.length > 0) {
        picked.add(randomChoice(courseIds).toString());
      }
      student.courses = Array.from(picked);
    }

    const createdStudents = await Student.insertMany(studentsPayload);

    // Reflejar inscripción en cursos
    const courseMap = new Map(createdCourses.map(c => [c._id.toString(), c]));
    for (const st of createdStudents) {
      for (const cId of st.courses) {
        const course = courseMap.get(cId.toString());
        if (course) {
          course.students.push(st._id);
        }
      }
    }
    await Promise.all(Array.from(courseMap.values()).map(c => c.save()));

    res.json({
      message: 'Seeding completado',
      requestedCount: count,
      created: {
        courses: createdCourses.length,
        students: createdStudents.length,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};