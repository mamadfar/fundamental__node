import { DataTypes } from "@sequelize/core";

import sequelize from "../db.js";

const Test = sequelize.define('Test', {
    field1: {
        type: DataTypes.INTEGER,
        //? This validation is only on the ORM level, it will not be applied on the database level,
        //? so if you try to insert a record with a value that does not satisfy the validation,
        //? it will throw an error, but if you try to insert a record directly into the database
        //? with a value that does not satisfy the validation, it will be inserted without any error.
        validate: {
            max: 100,
            min: 10,
            //? Custom validation function
            isEven(value) {
                if (value % 2 !== 0) {
                    throw new Error('Only even numbers are allowed for field1');
                }
            }
        }
    },
    field2: DataTypes.INTEGER,
    field3: DataTypes.INTEGER,
}, {
    timestamps: false,
    validate: {
        //? Custom validation function for the whole model
        bothOrNone() {
            const isField2Set = !(this.field2 === null || this.field2 === undefined);
            const isField3Set = !(this.field3 === null || this.field3 === undefined);
            if (isField2Set !== isField3Set) {
                throw new Error('You can not set only one of field2 or field3');
            }

        }
    }
})

await Test.sync({ force: true });

await Test.create({field1: 16})

try {
    await Test.create({field1: 17})
} catch (error) {
    console.error(error.message);
}

try {
    await Test.create({field1: 14, field2: 999})
} catch (error) {
    console.error(error.message);
}

await Test.create({field1: 14, field2: 999, field3: 333})

//?   is: /^[a-z]+$/i,          // matches this RegExp
//?   is: ["^[a-z]+$",'i'],     // same as above, but constructing the RegExp from a string
//?   not: /^[a-z]+$/i,         // does not match this RegExp
//?   not: ["^[a-z]+$",'i'],    // same as above, but constructing the RegExp from a string
//?   isEmail: true,            // checks for email format (foo@bar.com)
//?   isUrl: true,              // checks for url format (https://foo.com)
//?   isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
//?   isIPv4: true,             // checks for IPv4 (129.89.23.1)
//?   isIPv6: true,             // checks for IPv6 format
//?   isAlpha: true,            // will only allow letters
//?   isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
//?   isNumeric: true,          // will only allow numbers
//?   isInt: true,              // checks for valid integers
//?   isFloat: true,            // checks for valid floating point numbers
//?   isDecimal: true,          // checks for any numbers
//?   isLowercase: true,        // checks for lowercase
//?   isUppercase: true,        // checks for uppercase
//?   notNull: true,            // won't allow null
//?   isNull: true,             // only allows null
//?   notEmpty: true,           // don't allow empty strings
//?   equals: 'specific value', // only allow a specific value
//?   contains: 'foo',          // force specific substrings
//?   notIn: [['foo', 'bar']],  // check the value is not one of these
//?   isIn: [['foo', 'bar']],   // check the value is one of these
//?   notContains: 'bar',       // don't allow specific substrings
//?   len: [2,10],              // only allow values with length between 2 and 10
//?   isUUID: 4,                // only allow uuids
//?   isDate: true,             // only allow date strings
//?   isAfter: "2011-11-05",    // only allow date strings after a specific date
//?   isBefore: "2011-11-05",   // only allow date strings before a specific date
//?   max: 23,                  // only allow values <= 23
//?   min: 23,                  // only allow values >= 23
//?   isCreditCard: true,       // check for valid credit card numbers