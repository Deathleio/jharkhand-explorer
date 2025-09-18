import express from 'express';
const router = express.Router();
import { 
  getProducts, 
  getProductById, 
  createProduct,
  getMyProducts,
  deleteProduct
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

// --- Public Routes ---
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// --- Protected Routes ---
// The path here is now corrected to '/my-listings'
router.route('/my-listings').get(protect, getMyProducts);

router.route('/').post(protect, createProduct);
router.route('/:id').delete(protect, deleteProduct);

export default router;