const router = require('express').Router();

const { Category, Product } = require('../../models');


  //the end of the api catagory; find all categories included in 
  //its products
router.get('/', async (req, res) => {
  try {

    const categoryData = await Category.findAll({

    include: [Product]
    });

    res.status(200).json(categoryData);
  } catch (err) {

    res.status (500).json(err);
  }
});

// creates a new category
router.post('/', async (req, res) => {
try {

  const newCategory = await Category.create(req.body);

  res.status(200).json(newCategory);
} catch (err) {

  res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
  
  // this deletes the category by its id
  try { 

    const [deletedRows] = await Category.destroy({
    where: {

      id: req.params.id
    }
  });

  if (deletedRows === 0) {

  } res.status(200).json({message: 'Category has been deleted'})
} catch (err) {
  
  res.status(400).json(err)
}
});

// updates the category by its id
router.put('/:id', async (req, res) => {
  try { 

    const [updtedRows] = await Category.update(req.body, {

    where: {
      id: req.params.id
    }
  });

  if (updatedRows === 0) {

    res.status(404).json({message: 'Category Not Made'});
    return;

  } const updateCategory = await Category.findByPk(req.params.id);

  res.status(200).json(updateCategory)
} catch (err) {

  res.status(400).json(err)
}
});

  // finds a category by its id and the products with it
router.get('/:id', async (req, res) => {
  try {

    const categoryData = await Category.findByPk(req.params.id, {

      include: [{model: Product}]
    });

    if (!categoryData) {

      res.status(404).json({message: 'This category does not exist'});
      return;
    }

    res.status(200).json(categoryData)
  } catch (err) {

    res.status(500).json(err);
  }
});

module.exports = router;