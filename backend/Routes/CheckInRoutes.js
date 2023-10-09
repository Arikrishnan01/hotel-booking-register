import express from 'express';
import { 
        creatCheckIn, 
        allCheckIn, 
        updateCheckInById, 
        deleteCheckInById,
        findCheckInById
} from '../Controllers/CheckInController.js';

const router = express.Router();

/** SUB ROUTERS */
router.post('/creatCheckIn', creatCheckIn);
router.get('/allCheckIn', allCheckIn);
router.put('/:id', updateCheckInById);
router.delete('/:id', deleteCheckInById)
router.get('/:id', findCheckInById)

/** EXPORT THE SUBROUTERS */
const checkInRouter = router;
export default checkInRouter;