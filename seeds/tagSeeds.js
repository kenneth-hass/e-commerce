const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'red',
  },
  {
    tag_name: 'orange',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;