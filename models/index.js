const { Sequelize, DataTypes } = require('sequelize');

// Inisialisasi Sequelize
const sequelize = new Sequelize('restapi_db', 'postgres', 'Biarapa?biarin', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = require('./user')(sequelize, DataTypes);
const Item = require('./item')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);

// Relasi antara model
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Item.hasMany(Order, { foreignKey: 'itemId' });
Order.belongsTo(Item, { foreignKey: 'itemId' });

sequelize.sync();

module.exports = {
  sequelize,
  User,
  Item,
  Order,
};
