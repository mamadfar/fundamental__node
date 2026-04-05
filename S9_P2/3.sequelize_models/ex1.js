import { DataTypes } from "@sequelize/core";

import sequelize from "./db.js";

const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING(100),
    age: DataTypes.INTEGER,
    username: DataTypes.STRING(50),
}, {
    timestamps: false //? It will not create createdAt and updatedAt fields
})

const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
}, {
    timestamps: false,
    noPrimaryKey: true //? It will not create id field as primary key
})

await User.sync();
await Task.sync();

//! Drop tables if they exist --> Only on development environment
// await User.sync({ force: true });
// await Task.sync({ force: true });

//? Update tables without dropping them or losing data
// await User.sync({ alter: true });
// await Task.sync({ alter: true });

//? Sync all tables at once --> We can use all options here as well
// await sequelize.sync({ force: true });
// await sequelize.sync({ alter: true });

//! Drop a table
// await User.drop();

//! Drop all tables
// await sequelize.drop();

//* sequelize.drop() or sequelize.sync() will only work on tables that are defined
//* in the current project. It will not drop or sync tables that are created manually
//* in the database or by other projects. So, if you have a table that is not defined
//* in your Sequelize models, it will not be affected by these operations.