import { DataTypes } from "@sequelize/core";
import sequelize from "../db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING(100),
});

const Email = sequelize.define("Email", {
  email: DataTypes.STRING(100),
});

User.hasOne(Email, {
    foreignKey: {
        unique: true,
    }
});

await sequelize.sync({ force: true });

const user1 = await User.create({ name: 'Mohammad' });
const email1 = await Email.create({ email: "mohammad@example.com", userId: null });
const email2 = await Email.create({ email: "mohammad@example.com", userId: null });

await user1.setEmail(email1)
await user1.setEmail(email2)
// await email1.setUser(user1)

// await user1.setEmail(null)
await email2.setUser(null)

// await user1.setEmail(1)
// await user1.setEmail(2, {destroyPrevious: true})

// await user1.createEmail({email: 'a@b.com'})
// await user1.createEmail({email: 'b@c.com'})

await email1.createUser({name: 'Ali'})
await email1.setUser(1, {destroyPrevious: true}) //? Doesn't work because of the relation and User is the source model, not the target model. So we can't use the destroyPrevious option in this case. We can only use it in the target model

await user1.destroy();