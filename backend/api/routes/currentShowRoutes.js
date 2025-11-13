import express from 'express';
import { fetchCurrentShow } from '../controllers/currentShowController.js';

const router = express.Router();

// GET /current-show
router.get('/', fetchCurrentShow);

export default router;
