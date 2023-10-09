import express from "express";
import { 
    createCheckOut, 
    allCheckOut,
    updateCheckOutById,
    deleteCheckOutById,
    findCheckOutById
} from '../Controllers/CheckOutController.js';

const router = express.Router();

/**
 * ALL SUB ROTERS
 */
router.post('/createCheckOut', createCheckOut);
router.get('/allCheckOut', allCheckOut);
router.put('/:id', updateCheckOutById);
router.delete('/:id', deleteCheckOutById);
router.get('/:id',findCheckOutById);

/** EXPORT THE ROUTER */
const checkOutRouter = router;
export default checkOutRouter;