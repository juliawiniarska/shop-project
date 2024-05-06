import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import Order from '../models/orderModel.js'; 
import Brand from '../models/brandModel.js'; 
import Category from '../models/categoryModel.js';

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10; 
  const page = Number(req.query.pageNumber) || 1;
  const { keyword, brand, categoryName } = req.query;

  let queryFilter = keyword ? {
    name: { $regex: keyword, $options: 'i' },
  } : {};

  if (brand) queryFilter.brand = brand;

  if (categoryName) {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      res.status(404);
      throw new Error('Category not found');
    }
    queryFilter.category = category._id;
  }

  const count = await Product.countDocuments({ ...queryFilter });
  const products = await Product.find({ ...queryFilter })
    .populate('category', 'name')
    .populate('brand', 'name')
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});




const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand, 
    category, 
    countInStock,
  } = req.body;

  const brandExists = await Brand.findById(brand);
  const categoryExists = await Category.findById(category);

  if (!brandExists || !categoryExists) {
    res.status(400);
    throw new Error('Incorrect brand or category provided');
  }

  const product = new Product({
    name,
    price,
    user: req.user._id, 
    image,
    brand,
    category,
    countInStock,
    numReviews: 0,
    description,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});


const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});


const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});


const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const productId = req.params.id;

  const product = await Product.findById(productId);

  if (product) {
    const boughtProduct = await Order.findOne({ 
      user: req.user._id, 
      'orderItems.product': productId, 
      isPaid: true 
    });

    if (!boughtProduct) {
      res.status(400);
      throw new Error('Tylko użytkownicy, którzy kupili dany produkt mogą dodać opinię');
    }

    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Ten produkt został już przez ciebie oceniony');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Opinia dodana' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});


const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(6);

  res.status(200).json(products);
});

const getProductsByCategory = asyncHandler(async (req, res) => {
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;
  const categoryName = req.params.category; 
  const sortOption = req.query.sort;

  let sortCriteria = {};
  let additionalCriteria = {};

  switch (sortOption) {
    case 'available':
      sortCriteria = { createdAt: -1 };
      additionalCriteria.countInStock = { $gt: 0 };
      break;
    case 'nameAsc':
      sortCriteria = { name: 1 };
      break;
    case 'nameDesc':
      sortCriteria = { name: -1 };
      break;
    case 'priceAsc':
      sortCriteria = { price: 1 };
      break;
    case 'priceDesc':
      sortCriteria = { price: -1 };
      break;
    default:
      sortCriteria = { createdAt: -1 };
  }

  const category = await Category.findOne({ name: categoryName });
  if (!category) {
    return res.status(404).json({ message: "category not found" });
  }
  additionalCriteria.category = category._id;

  const count = await Product.countDocuments(additionalCriteria);
  const products = await Product.find(additionalCriteria)
    .populate('category', 'name')
    .populate('brand', 'name')
    .sort(sortCriteria)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getProductsByBrand = asyncHandler(async (req, res) => {
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;
  const brandName = req.params.brand; 
  const sortOption = req.query.sort;

  let sortCriteria = {};
  let additionalCriteria = {};

  switch (sortOption) {
    case 'available':
      sortCriteria = { createdAt: -1 };
      additionalCriteria.countInStock = { $gt: 0 };
      break;
    case 'nameAsc':
      sortCriteria = { name: 1 };
      break;
    case 'nameDesc':
      sortCriteria = { name: -1 };
      break;
    case 'priceAsc':
      sortCriteria = { price: 1 };
      break;
    case 'priceDesc':
      sortCriteria = { price: -1 };
      break;
    default:
      sortCriteria = { createdAt: -1 };
  }

  const brand = await Brand.findOne({ name: brandName });
  if (!brand) {
    return res.status(404).json({ message: "Brand not found" });
  }
  additionalCriteria.brand = brand._id;

  const count = await Product.countDocuments(additionalCriteria);
  const products = await Product.find(additionalCriteria)
    .populate('brand', 'name')
    .populate('category', 'name')
    .sort(sortCriteria)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getProductsByCategory,
  getProductsByBrand,
};

