import { DataTypes } from "@sequelize/core";

import sequelize from "../db.js";

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING(50)
    },
        completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    test1: {
        type: DataTypes.STRING,
        index: true
    },
    test2: {
        type: DataTypes.STRING,
        index: 'my_idx'
    },
    test3: {
        type: DataTypes.STRING,
        unique: true
    },
    //? Both test4 and test5 will be part of the same unique index named 'unq_idx'
    test4: {
        type: DataTypes.STRING,
        unique: 'unq_idx'
    },
    test5: {
        type: DataTypes.STRING,
        unique: 'unq_idx'
    }
}, {
    timestamps: false,
    indexes: [
        {
            name: 'title_idx',
            type: 'UNIQUE',
            fields: ['title'] //? can be combined with other fields to create a composite index
        }, {
            name: 'completed_idx',
            fields: ['completed']
        }
    ]
})

await Task.sync({ force: true });

await Task.create({
    title: "New Task",
    completed: false
})