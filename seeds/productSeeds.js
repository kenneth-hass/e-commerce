const { Product } = require('../models');

const productData = [
  {
    product_name: 'Polo Shirt',
    price: 10.59,
    stock: 34,
    category_id: 1,
  },
  {
    product_name: 'Sports Socks',
    price: 10.26,
    stock: 11,
    category_id: 3,
  },
  {
    product_name: 'Purse',
    price: 29.99,
    stock: 17,
    category_id: 2,
  },
  {
    product_name: 'Chewing Gum',
    price: 4.48,
    stock: 53,
    category_id: 5,
  },
  {
    product_name: 'Perfume',
    price: 12.99,
    stock: 12,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;