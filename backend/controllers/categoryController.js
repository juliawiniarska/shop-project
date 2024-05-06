import asyncHandler from '../middleware/asyncHandler.js';
import Category from '../models/categoryModel.js'; 

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const categoryExists = await Category.findOne({ name });

  if (categoryExists) {
    res.status(400);
    throw new Error('The category already exists.');
  }

  const category = new Category({
    name,
    description
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const category = await Category.findById(req.params.id);

  if (category) {
    category.name = name || category.name;
    category.description = description || category.description;

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await Category.deleteOne({ _id: category._id });
    res.json({ message: 'Category deleted' });
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
});

const getCategoryDetails = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }

  res.json(category);
});



export {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryDetails,
};
