const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // this defines the columns 
    id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    tag_name: {
      type: DataTypes.STRING,

    }
  },
  {

    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'tag',

  }
);

module.exports = Tag;