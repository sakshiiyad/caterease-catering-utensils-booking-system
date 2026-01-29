import express from 'express'
const router=express.Router();

import { ProtectMiddleware } from '../../middleware/protect.js';
import { createBooking,getMyBooking } from '../../controllers/bookingController.js';

router.post('/bookings',ProtectMiddleware,createBooking);
router.get('/bookings/my',ProtectMiddleware,getMyBooking);

export default router;