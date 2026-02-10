import expresss from 'express';
import { ProtectMiddleware } from '../../middleware/protect.js';
import { adminBookingController,updateStatus} from '../../controllers/adminBookingController.js';
import { isAdminMiddleware } from '../../middleware/isAdmin.js';
import { updateInventoryQty } from '../../controllers/InventoryController.js';
const router=expresss.Router();
router.get('/admin/bookings',ProtectMiddleware,isAdminMiddleware,adminBookingController);
router.patch('/admin/bookings/:id/status',ProtectMiddleware,isAdminMiddleware,updateStatus);




export default router;