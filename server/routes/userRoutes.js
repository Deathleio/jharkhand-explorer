import express from 'express';
const router = express.Router();
import { registerUser, loginUser } from '../controllers/userController.js';

// The new route for registration is added here
router.post('/register', registerUser);
router.po