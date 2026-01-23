

import express from 'express'
import {ProtectMiddleware} from '../../middleware/protect.js';
import {showbooking} from '../../controllers/UserController.js';
const router=express.Router();

router.get('/booking',ProtectMiddleware,showbooking)

export default router