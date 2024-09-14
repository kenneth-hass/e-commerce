// sequalize library pieces
const { Model, DataTypes } = require('sequelize');
// here we import our database connection
const sequelize = require('../config/connection');

class Product extends Model {}

// sets the rules
Product.init(
  {
    // defines the columns
    id: {

      type: DataTypes.INTEGER,
      autoIncrement: true
      allowNull: false,
      primaryKey: true,

    },
    product_name: {

      type: DataTypes.STRING,
      allowNull: false,

    },
    price: {

      type: DataTypes.DECIMAL,
      allowNull: false,

      validate: {
        isDecimal: true
      }
    },

    stock: {

      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,

      validate: {
        isNumeric: true,
      }
    },

    category_id: {

      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'product',
  }
);

module.exports = Product;