
import {DataTypes} from '@sequelize/core'
import sequelize from '../db.js'

const Country = sequelize.define('Country', {
    name: DataTypes.STRING(100)
});

const City = sequelize.define('City', {
    name: DataTypes.STRING(100),
    countryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id',
            // table: 'countries' //? model or table, only one should be used, model is preferred
        },
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL'
    }
})

await sequelize.sync({force: true})

await Country.bulkCreate([{name: 'Iran'}, {name: 'Afghanistan'}])
await City.create({name: 'Tehran', countryId: 1})
await City.create({name: 'Isfahan', countryId: 1})
await City.create({name: 'Kabol', countryId: 2})
// await City.create({name: 'Ankara', countryId: 3})