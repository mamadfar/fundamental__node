import { DataTypes } from "@sequelize/core";

import sequelize from "./db.js";

const Book = sequelize.define('Book', {
    //? We can only have one auto-increment field, when we define it, ORM won't create id field as primary key
    //? Primary key should be auto-incremented field, otherwise we must provide it in each record
    bookId: {
        type: DataTypes.BIGINT, //? Default is INTEGER
        primaryKey: true,
        autoIncrement: true
    },
    pages: DataTypes.SMALLINT,
    title: {
        //? We can specify charset and collation for a specific field
        type: DataTypes.STRING(200) + " CHARSET latin1 COLLATE latin1_swedish_ci",
        defaultValue: ""
    },
        description: {
        type: DataTypes.STRING(2000),
        defaultValue: "No Description"
    }
}, {
    //? We can specify charset and collation for the whole table
    charset: 'utf8mb3', //* Default is utf8mb4
    collate: 'utf8mb3_persian_ci', //* Default is utf8mb4_general_ci
    engine: 'MyISAM', //* Default is InnoDB
    initialAutoIncrement: 10, //* Default is 1
    //? These options will only work on the DB not in the model definition, for example, we will call BooK.sync(), not the_books.sync()
    freezeTableName: true, //* It will not pluralize the table name
    tableName: "the_books", //* It will use this name for the table instead of the model name
    underscored: true, //* It will use snake_case for the field names instead of camelCase
})

await Book.sync({ force: true });

await Book.create({
    pages: 300,
    title: "New Book",
    description: "A test description"
})