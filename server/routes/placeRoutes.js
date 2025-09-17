import express from 'express';
const router = express.Router();
import { getPlaces, getPlaceById, createPlace } from '../controllers/placeController.js';

router.route('/').get(getPlaces).post(createPlace);
router.route('/:id').get(getPlaceById);

export default router;