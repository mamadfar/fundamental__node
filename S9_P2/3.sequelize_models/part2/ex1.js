import { DataTypes } from "@sequelize/core";

import sequelize from "../db.js";

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING(200),
        defaultValue: ""
    },
        desc: {
        type: DataTypes.STRING(2000),
        defaultValue: "No Description",
        columnName: 'description' //? It will use this name for the field instead of the attribute name
    }
}, {
   createdAt: 'Created_At',
   updatedAt: false,
   //? It will not delete the record from the database, but it will set the value of the deletedAt
   //? field to the current date and time. This way, we can keep track of when a record was
   //? deleted without actually removing it from the database. (deletedAt + paranoid) --> Soft Delete
   deletedAt: 'Deleted_At',
   paranoid: true
})

await Book.sync({ force: true });

await Book.create({
    title: "New Book",
    desc: "A test description"
})