import express from 'express';
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
  getBrandDetails
} from '../controllers/brandController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from "../middleware/checkObjectId.js";


const router = express.Router();

router.route('/')
  .get(getBrands)
  .post(protect, admin, createBrand); 

router.route('/:id')
  .get(checkObjectId, getBrandDetails) 
  .put(protect, admin, checkObjectId, updateBrand)
  .delete(protect, admin, checkObjectId, deleteBrand);


export default router;
