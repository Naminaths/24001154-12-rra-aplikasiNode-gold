const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Order extends Model {}

  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false  
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Diterima'
    }
  }, {
    sequelize,
    modelName: 'Order'
  });

  return Order;
};
