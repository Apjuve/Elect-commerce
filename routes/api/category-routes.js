const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoriesData = await Category.findAll({
      include: [{model: Product, as: 'products'}]
    });
    res.status(200).json(categoriesData);
  }catch (err) {
    res.status(500).json(err)
  }
});

// Route to get a single categort by the id and include the product.
router.get('/:id', async(req, res) => {
  try {
    const singleCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product, as: 'products'}]
    });

    if (!singleCategoryData) {
      res.status(404).json({ message: 'No category found with that id.'})
      return;
    }
    res.status(200).json(singleCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategoryData = await Category.create(req.body);
    res.status(201).json(newCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` 
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (!updatedCategory) {
      res.status(404).json({message: 'No category found with this id.'});
      return;
    }

    res.status(201).json(updatedCategory);
  }catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!deleteCategory){
      res.status(404).json({message: 'No category found with this id.'});
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
