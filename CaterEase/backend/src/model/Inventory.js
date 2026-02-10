import mongoose from "mongoose";

const Schema=mongoose.Schema;

const InventorySchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    totalQuantity:{
        type:Number,
        required:true,
        min:0,
    },
    availableQuantity:{
        type:Number,
        required:true,
        min:0,
    },
    unit:{
        type:String,
        default:"pcs",
    },
    status:{
        type:String,
        enum:["Available","Out of stock"],
        default:"Available",
    },
},
{timestamps:true}
    
);
InventorySchema.pre("save",async function(){
    this.status=this.availableQuantity>0?"Available":"Out of stock";
   
})
const InventoryModel=mongoose.model("Inventory",InventorySchema);
export default InventoryModel;