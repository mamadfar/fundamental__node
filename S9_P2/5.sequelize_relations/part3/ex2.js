import { DataTypes } from "@sequelize/core";
import sequelize from "../db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING(100),
}, {
    timestamps: false,
});

const Email = sequelize.define("Email", {
  email: DataTypes.STRING(100),
}, {
    timestamps: false,
});

//? Sequelize V7
// User.hasOne(Email);
//? Sequelize V6
Email.belongsTo(User, {
    inverse: {
        type: 'hasOne'
    }
});

await sequelize.sync({ force: true });

await User.bulkCreate([
  { name: "Mohammad" },
  { name: "Ali" },
  { name: "Sara" },
  { name: "Reza" },
  { name: "Atabak" },
  { name: "Laya" },
]);

await Email.create({ email: "mohammad@example.com", userId: 1 });
await Email.create({ email: "ali@example.com", userId: 2 });
await Email.create({ email: "sara@example.com", userId: 4 });
await Email.create({ email: "atabak@example.com", userId: 6 });

// const email1 = await Email.findByPk(3);
// console.log(email1.toJSON());

// const user1 = await email1.getUser();
// console.log(user1.toJSON());

// await email1.createUser({ name: 'Hassan' })

// const user2 = await User.findByPk(1);
// console.log(user2.toJSON());

// const email2 = await user2.getEmail();
// console.log(email2.toJSON());