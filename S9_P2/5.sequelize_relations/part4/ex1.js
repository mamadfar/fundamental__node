import { DataTypes } from "@sequelize/core";
import sequelize from "../db.js";

const Course = sequelize.define("Course", {
  name: DataTypes.STRING,
}, {
    timestamps: false,
});

const Student = sequelize.define("Student", {
  name: DataTypes.STRING,
}, {
    timestamps: false,
});

Course.belongsToMany(Student, {
    //? Mandatory --> We need a junction table to connect these two tables in a many-to-many relationship. By default, Sequelize will create a junction table with a name that combines the names of the two models (e.g., CourseStudents). However, we can specify a custom name for the junction table using the through option.
    through: 'Enrol',
    foreignKey: {
        name: 'course_id'
    },
    otherKey: {
        name: 'student_id'
    },
    sourceKey: 'id',
    targetKey: 'id'
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
])

const mohammad = await Student.findByPk(1);
console.log(mohammad.toJSON())
await mohammad.setCourses(2)
console.log(await mohammad.getCourses({raw: true}))
console.log((await mohammad.getCourses()).map(c => c.toJSON()))
await mohammad.setCourses([1, 3])
console.log(await mohammad.getCourses({raw: true}))
console.log(await mohammad.countCourses())
await mohammad.addCourse(2);
console.log(await mohammad.countCourses())

console.log('--------------------------------')

const physics = await Course.findByPk(2);
console.log(physics.toJSON())
console.log(await physics.getStudents({raw: true}))
await physics.setStudents([1, 4])
console.log(await physics.getStudents({raw: true}))

await physics.addStudent(3);
console.log(await physics.countStudents())

await mohammad.createCourse({ name: "Node.js" });
await physics.createStudent({ name: 'Zahra'})

console.log(await mohammad.hasCourse(3))
console.log(await mohammad.hasCourses([3, 4]))