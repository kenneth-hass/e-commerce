// model imports
const Product = require('./Product');

const Tag = require('./Tag');

const ProductTag = require('./ProductTag');

// through the productTag, we make it belong to many
Product.belongsToMany(Tag, {

  foreignKey: 'product_id',

  through: ProductTag,
})

Tag.belongsToMany(Product, {

  through: ProductTag,

  foreignKey: 'tag_id',
})

module.exports = {

  Product,
  Category,
  Tag,
  ProductTag,
};