import { DataTypes, Op } from "@sequelize/core";
import sequelize from "../db.js";
import { raw } from "mysql2";

const Country = sequelize.define(
  "Country",
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);

const City = sequelize.define(
  "City",
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  },
);

//? Sequelize V7
Country.hasMany(City);
//? Sequelize V6
// City.belongsTo(Country, {
//     inverse: {
//         type: 'hasMany'
//     }
// });

await sequelize.sync({ force: true });

await Country.bulkCreate([
    {name: 'Iran'},
    {name: 'Turkey'},
    {name: 'Afghanistan'},
])

await City.bulkCreate([
    {name: 'Tehran', countryId: 1},
    {name: 'Isfahan'},
    {name: 'Tabriz', countryId: 1},
    {name: 'Kabul', countryId: 2},
    {name: 'Herat', countryId: 2},
    {name: 'Istanbul', countryId: 3},
    {name: 'Van', countryId: 3},
])

const iran = await Country.findByPk(1);
const afghanistan = await Country.findByPk(2);
const turkey = await Country.findByPk(3);

console.log(iran.toJSON())
console.log(await iran.getCities({raw: true}));
console.log(await afghanistan.getCities({raw: true}));
console.log(await turkey.getCities({raw: true}));

const isfahan = await City.findOne({
    where: {
        name: 'Isfahan'
    }
})
console.log(await isfahan.getCountry())
await isfahan.setCountry(iran)
console.log(await isfahan.getCountry({raw: true}))

await isfahan.createCountry({name: 'Iran2'})
console.log(await isfahan.getCountry({raw: true}))

//? setCities() will remove the the old cities and add the new ones
await iran.setCities(isfahan)
console.log(await iran.getCities({raw: true}))
await iran.setCities(1)
console.log(await iran.getCities({raw: true}))
await iran.setCities([1, 2, 3, 5, 7])
console.log(await iran.getCities({raw: true}))

await turkey.addCity(7)
console.log(await turkey.getCities({raw: true}))
await turkey.addCity(isfahan)
console.log(await turkey.getCities({raw: true}))
await iran.addCities([2, 7])
console.log(await iran.getCities({raw: true}))

//? removeCity() will remove the city from the country (if the countryId is nullable) but not delete it from the database
await turkey.removeCity(6)
console.log(await City.findAll({raw: true}))
await iran.removeCities([1, 2, 7])
console.log(await City.findAll({raw: true}))
//? if you want to delete the city from the database, you can pass the option {destroy: true} to removeCity()
await afghanistan.removeCity(4, {destroy: true})
console.log(await City.findAll({raw: true}))

await iran.createCity({name: 'Qazvin'})
console.log(await iran.getCities({raw: true}))
await iran.addCities([1, 2, 3, 4, 6, 7])
console.log(await iran.getCities({raw: true}))

console.log(await iran.hasCity(isfahan))
console.log(await turkey.hasCity(isfahan))
console.log(await iran.hasCities([1, 3, 5]))
console.log(await iran.hasCities([isfahan, 5]))

console.log(await iran.countCities())
console.log(await iran.countCities({
    where: {
        id: {
            [Op.gt]: 2
        }
    }
}))

await iran.setCities([1, 2, 3, 8])
await afghanistan.createCity({name: 'Kabol'})
await afghanistan.addCity(5)
await turkey.setCities([6, 7])
console.log(await City.findAll({raw: true}))