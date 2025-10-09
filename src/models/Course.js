const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  },
  { timestamps: true }
);

module.exports = model('Course', CourseSchema);