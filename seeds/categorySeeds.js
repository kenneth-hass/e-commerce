const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Dress Shirts',
  },
  {
    category_name: 'Accesories',
  },
  {
    category_name: 'Footwear',
  },
  {
    category_name: 'Fragrence',
  },
  {
    category_name: 'Candy',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;