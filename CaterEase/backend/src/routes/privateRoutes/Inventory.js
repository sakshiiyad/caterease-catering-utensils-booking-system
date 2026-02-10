import express from 'express';
import { ProtectMiddleware } from '../../middleware/protect.js';
import { isAdminMiddleware } from '../../middleware/isAdmin.js';
import { addInventoryitem,getInventoryItems,deleteInventoryQty,updateInventoryQty } from '../../controllers/InventoryController.js';
const router=express.Router();


router.get('/inventory',ProtectMiddleware,isAdminMiddleware,getInventoryItems)
router.post('/inventory/add',ProtectMiddleware,isAdminMiddleware,addInventoryitem)
router.patch('/inventory/:id',ProtectMiddleware,isAdminMiddleware,updateInventoryQty);
router.delete('/inventory/:id',ProtectMiddleware,isAdminMiddleware,deleteInventoryQty);
export default router;