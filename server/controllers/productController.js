import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
const getProducts = async (req, res) => {
  const products = await Product.find({}).populate('seller', 'name');
  res.json(products);
};

// @desc    Fetch single product
// @route   GET /api/products/:id
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

// @desc    Create a product
// @route   POST /api/products
const createProduct = async (req, res) => {
  const { name, price, description, image, category } = req.body;
  const product = new Product({
    name,
    price,
    description,
    image,
    category,
    seller: req.user._id, // From authMiddleware
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

export { getProducts, getProductById, createProduct };