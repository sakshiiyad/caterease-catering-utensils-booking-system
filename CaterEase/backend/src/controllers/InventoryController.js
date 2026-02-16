import InventoryModel from "../model/Inventory.js";
export const addInventoryitem = async (req, res) => {
    try {
        const { name, totalQuantity, availableQuantity, unit, Inventorytype } =
            req.body;
        if (!name || !totalQuantity || !Inventorytype) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields",
            });
        }
        const inventoryItem = await InventoryModel.create({
            name,
            totalQuantity,
            availableQuantity: totalQuantity,
            unit,
            Inventorytype,
        });
        return res.status(201).json({
            success: true,
            message: "Inventory added successfully",
            inventoryItem,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to add inventory item",
            error: error.message,
        });
    }
};

export const getInventoryItems = async (req, res) => {
    try {
        const inventoryItems = await InventoryModel.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            message: "Inventory items fetched successfully",
            count: inventoryItems.length,
            inventoryItems,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            messafe: "Failed to fetch inventory items",
            error: error.message,
        });
    }
};

export const updateInventoryQty = async (req, res) => {
    try {
        const { action } = req.body;
        const { id } = req.params;
        const item = await InventoryModel.findById(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Inventory item not found",
            });
        }
        if (action === "increase") {
            if(item.availableQuantity >= item.totalQuantity) {
                return res.status(400).json({success: false, message: "Available quantity cannot exceed total quantity", });
            }   
            item.availableQuantity += 1;
            item.status = item.availableQuantity > 0 ? "Available" : "Out of stock";
            }
         else if (action === "decrease") {
            if (item.availableQuantity === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Item is already out of stock",
                });
            }
            item.availableQuantity -= 1;
            item.status = item.availableQuantity > 0 ? "Available" : "Out of stock";
        } else if (action === "outofstock") {
            item.availableQuantity = 0;
            item.status = "Out of stock";
        } else if (action === "restock") {
            const { quantity } = req.body;
            if (!quantity || quantity <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide a valid quantity to restock",
                });
            }
            item.totalQuantity += quantity;
            item.availableQuantity += quantity;
            item.status = "Available";
        }
        else if(action==="makeAvailable"){
            if(item.totalQuantity===0){
                return res.status(400).json({
                    success:false,
                    message:"Total quantity is zero, cannot make item available",
                })
            }
            item.availableQuantity=item.totalQuantity;
            item.status="Available";

        }
        await item.save();
return res.status(200).json({
            success: true,
            message: "Inventory updated successfully",
            inventoryItem: item,  
})      
    } catch (error) {
        return res.status(500).json({
            success: false,
            messafe: "Failed to update inventory items",
            error: error.message,
        });
    }
};

export const deleteInventoryQty = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await InventoryModel.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: "Inventory item not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Inventory deleted successfully",
            inventoryItem: item,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            messafe: "Failed to delete inventory items",
            error: error.message,
        });
    }
};
