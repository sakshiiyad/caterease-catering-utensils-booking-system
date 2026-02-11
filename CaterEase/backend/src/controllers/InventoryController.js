import InventoryModel from "../model/Inventory.js";
export const addInventoryitem=async(req,res)=>{
    try{
        const{name,totalQuantity,availableQuantity,unit,Inventorytype}=req.body;
        if(!name||!totalQuantity||!Inventorytype){
            return res.status(400).json({
                success:false,
                message:"Please provide all required fields"
            })
        }
        const inventoryItem=await InventoryModel.create({
            name,
            totalQuantity,
            availableQuantity:totalQuantity,
            unit,
            Inventorytype
            
            
        })
        return res.status(201).json({
            success:true,
            message:"Inventory added successfully",
            inventoryItem
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Failed to add inventory item",
            error:error.message,
        })

    }
}

export const getInventoryItems=async(req,res)=>{
    try{
        const inventoryItems=await InventoryModel.find().sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            message:"Inventory items fetched successfully",
            count:inventoryItems.length,
            inventoryItems
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            messafe:"Failed to fetch inventory items",
            error:error.message,
        })

    }
}
export const updateInventoryQty=async(req,res)=>{
    try{
        const {action}=req.body;
        const {id}=req.params;
        const item=await InventoryModel.findById(id);
        if(!item){
            return res.status(404).json({
                success:false,
                message:"Inventory item not found",
            })
        }
        if(action==="decrease" && item.availableQuantity>0){
            item.totalQuantity-=1;
            item.availableQuantity-=1;
        }else if(action==="increase"){
            item.totalQuantity+=1;
            item.availableQuantity+=1;
        }
        await item.save();
            return res.status(200).json({
                success:true,
                message:"Inventory quantity updated successfully",
                inventoryItem:item
            })  
        
    
       
    }catch(error){
        return res.status(500).json({
            success:false,
            messafe:"Failed to update inventory items",
            error:error.message,
        })

    }
}
export const deleteInventoryQty=async(req,res)=>{
    try{
       
        const {id}=req.params;
        const item=await InventoryModel.findByIdAndDelete(id);
        if(!item){
            return res.status(404).json({
                success:false,
                message:"Inventory item not found",
            })
        }
       
       
            return res.status(200).json({
                success:true,
                message:"Inventory deleted successfully",
                inventoryItem:item
            })  
        
    
       
    }catch(error){
        return res.status(500).json({
            success:false,
            messafe:"Failed to delete inventory items",
            error:error.message,
        })

    }
}

