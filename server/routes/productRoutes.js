import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js'; // We'll create this next

router.route('/').get(getProducts).post(protect, createProduct);
router.route('/:id').get(getProductById);

export default router;