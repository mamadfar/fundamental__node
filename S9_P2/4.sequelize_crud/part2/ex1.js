import { Op } from "@sequelize/core";

import User from '../user.model.js'
import UsersSeed from '../users.seed.js'


await User.sync({ force: true });
await UsersSeed();

const result = await User.findAndCountAll({
    where: {
        id: {
            [Op.gt]: 6
        }
    },
    limit: 2,
    raw: true
})

// console.log(result.rows);
// console.log(result.count);

// const count = await User.count()
// console.log(count);

const count = await User.count({
    where: {
        id: {
            [Op.gt]: 12
        }
    }
})
// console.log(count);

const min = await User.min('birthYear')
console.log(min)

const max = await User.max('birthYear')
console.log(max)

//? It will return the sum as a string, because it might exceed SMALLINT limit of SQL,
//? so it is safer to return it as a string to avoid overflow issues.
const sum = await User.sum('birthYear')
console.log(sum)

const filter = {
    where: {
        id: {
            [Op.gt]: 10
        }
    }
}

const filteredMin = await User.min('birthYear', filter)
console.log(filteredMin)

const filteredMax = await User.max('birthYear', filter)
console.log(filteredMax)

const filteredSum = await User.sum('birthYear', filter)
console.log(filteredSum)