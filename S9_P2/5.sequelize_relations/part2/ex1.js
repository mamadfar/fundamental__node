import { DataTypes } from "@sequelize/core";
import sequelize from "../db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING(100),
});

const Email = sequelize.define("Email", {
  email: DataTypes.STRING(100),
});

User.hasOne(Email, {
    // inverse: {
            //? if we change this name, we should use for e.g., email2.getOwner() and ownerId instead of email2.getUser() and userId
    //     as: 'owner'
    // }
    // foreignKey: {
    //     name: "userId"
    // },
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

const user1 = await User.findByPk(1);
console.log(user1.toJSON());

const email1 = await user1.getEmail();
console.log(email1.toJSON());

const email2 = await Email.findByPk(3);
console.log(email2.toJSON());

const user2 = await email2.getUser();
console.log(user2.toJSON());