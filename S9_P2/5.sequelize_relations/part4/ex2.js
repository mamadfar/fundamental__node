import { DataTypes } from "@sequelize/core";
import sequelize from "../db.js";

const Course = sequelize.define(
  "Course",
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);

const Student = sequelize.define(
  "Student",
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);

const Enrol = sequelize.define(
  "Enrol",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    grade: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  },
);

Course.belongsToMany(Student, {
  through: Enrol
});

await sequelize.sync({ force: true });

await Student.bulkCreate([
  { name: "Mohammad" },
  { name: "Hassan" },
  { name: "Atabak" },
  { name: "Laya" },
]);

await Course.bulkCreate([
  { name: "Math" },
  { name: "Physics" },
  { name: "Programming" },
  { name: "Statistics" },
]);

const mohammad = await Student.findByPk(1);
console.log(mohammad.toJSON());
await mohammad.setCourses(2);
console.log(await mohammad.getCourses({raw: true}))

await Enrol.update({ grade: 15}, { where: {studentId: 1}})
console.log(await mohammad.getCourses({raw: true}))

await mohammad.setCourses([1, 3]);
console.log(await mohammad.getCourses({raw: true}))

await Enrol.update({ grade: 18}, {where: {courseId: 3}})
console.log(await mohammad.getCourses({raw: true}))

await mohammad.createCourse({ name: 'Node.js'})
console.log(await mohammad.getCourses({raw: true}))

const enrol1 = await Enrol.findByPk(3)
console.log(enrol1.toJSON())
console.log(await enrol1.getStudent({raw: true}))
console.log(await enrol1.getCourse({raw: true}))