import { DataTypes } from "@sequelize/core";

import sequelize from "./db.js";

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthYear: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    }
}, {
    // paranoid: true,
})

export default User;