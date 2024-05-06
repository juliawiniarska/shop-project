import asyncHandler from '../middleware/asyncHandler.js';
import Brand from '../models/brandModel.js'; 

const getBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find({});
  res.status(200).json(brands);
});

const createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const brandExists = await Brand.findOne({ name });

  if (brandExists) {
    res.status(400);
    throw new Error('The brand already exists');
  }

  const brand = new Brand({
    name
  });

  const createdBrand = await brand.save();
  res.status(201).json(createdBrand);
});

const updateBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const brand = await Brand.findById(req.params.id);

  if (brand) {
    brand.name = name || brand.name;
    
    const updatedBrand = await brand.save();
    res.json(updatedBrand);
  } else {
    res.status(404);
    throw new Error('Brand not found');
  }
});

const deleteBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);

  if (brand) {
    await Brand.deleteOne({ _id: brand._id });
    res.json({ message: 'Brand deleted' });
  } else {
    res.status(404);
    throw new Error('Brand not found');
  }
});

const getBrandDetails = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);

  if (!brand) {
    res.status(404);
    throw new Error('Brand not found');
  }

  res.json(brand);
});

export {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
  getBrandDetails,
};
