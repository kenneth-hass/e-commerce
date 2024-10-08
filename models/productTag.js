const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // this will define the columns
    id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'product',
      }

    },
    tag_id: {

      type:DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;