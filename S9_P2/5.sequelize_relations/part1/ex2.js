import { DataTypes } from "@sequelize/core";
import sequelize from "../db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING(100),
});

const Email = sequelize.define("Email", {
//   u_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//   },
  email: DataTypes.STRING(100),
});

User.hasOne(Email, {
  foreignKey: {
    name: "u_id",
    // unique: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  sourceKey: "id",
//   foreignKeyConstraints: false
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

await Email.create({ email: "mohammad@example.com", u_id: 1 });
await Email.create({ email: "ali@example.com", u_id: 2 });
await Email.create({ email: "sara@example.com", u_id: 4 });
await Email.create({ email: "atabak@example.com", u_id: 6 });
// await Email.create({email: 'atabak@example.com', u_id: 6});
// await Email.create({email: 'laya@example.com', u_id: 7});

// await Email.create({email: 'mohammad@example.com', userId: 1});
// await Email.create({email: 'ali@example.com', userId: 2});
// await Email.create({email: 'sara@example.com', userId: 4});
// await Email.create({email: 'atabak@example.com', userId: 6});
// await Email.create({email: 'atabak@example.com', userId: 6});
// await Email.create({email: 'laya@example.com', userId: 7});
