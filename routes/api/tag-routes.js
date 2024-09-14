const router = require('express').Router();

const { Tag, Product, ProductTag } = require('../models');

// the api/tags ending; find all tags and products assigned
router.get('/', async (req, res) => {
  try {

    const tagData = await Tag.findAll({

      include: [Product]
    });

    res.status(200).json(tagData);
  } catch(err) {

    res.status(500).json(err);
  }
});

// creates a new tag
router.post('/', async (req, res) => {
  try {
  
    const newTagData = await Tag.create(req.body);
  
    res.status(200).json(newTagData)
  } catch (err) {
  
  } res.status(500).json(err);
  });

  // deletes a tag by its id value
router.delete('/:id', async (req, res) => {
  try {

    const deletedRows = await Tag.destroy({

      where: {id: req.params.id}
    });

    if (deletedRows===0) {

      res.status(404).json({message: 'This tag does not exist!'});
      return
    } 

    res.status(200).json({message: 'Tag has been deleted!'});
  } catch (err) {
    
    res.status(500).json(err);
  }
});
  
//find a tag by its id and products assigned to it
router.get('/:id', async (req, res) => {
  try {

    const tagData = await Tag.findByPk(req.params.id, {

      include: [Product]
    });

    if (!tagData) {

      res.status(404).json({message: 'This tag does not exist!'});

      return
    }
    res.status(200).json(tagData);
  } catch (err) {

    res.status(500).json(err);
  }
});

  // allows a tag to have its name changed by its `id` value
router.put('/:id', async (req, res) => {
   try {

    const [updatedRows] = await Tag.update(req.body, {

      where: {id: req.params.id}
    });

    if(updatedRows===0) {

      return res.status(404).json({message: 'This tag does not exist!'});
    }

    const updatedTag = await Tag.findByPk(req.params.id);

    res.status(200).json(updatedTag)
   } catch (err) {

    res.status(400).json(err)
   }
});

module.exports = router;