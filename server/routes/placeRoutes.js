import express from 'express';
const router = express.Router();
import { 
  getPlaces, 
  getPlaceById, 
  createPlace, 
  updatePlace 
} from '../controllers/placeController.js';

// This route handles getting all places and creating a new one
router.route('/').get(getPlaces).post(createPlace);

// This route now handles GETTING one place and UPDATING one place
router.route('/:id').get(getPlaceById).put(updatePlace);

export default router;