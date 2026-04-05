import { DataTypes } from "@sequelize/core";

import sequelize from "./db.js";

const Book = sequelize.define('Book', {
    //? SMALLINT is a 2-byte integer that can store values from -32768 to 32767.
    //? It is used for small numbers that do not require a large range.
    pages: DataTypes.SMALLINT,
    title: {
        type: DataTypes.STRING(200),
        defaultValue: ""
    },
        description: {
        type: DataTypes.STRING(2000),
        defaultValue: "No Description"
    },
        published: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false //? Default is true
    },
        category: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false
})

await Book.sync({ force: true });

await Book.create({
    category: "Programming"
})

await Book.create({
    pages: 288,
    title: "My Book",
    category: "Network"
})

try {
    await Book.create({
        pages: 400,
        title: "My Book 2",
        category: "Fiction"
    })
} catch (error) {
    console.log(error.message)
}