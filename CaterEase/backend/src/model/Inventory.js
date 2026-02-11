import mongoose from "mongoose";

const Schema=mongoose.Schema;

const InventorySchema=new Schema({
    InventoryId:{
        type:String,
        unique:true,
      

    },
    Inventorytype:{
        type:String,
        enum:["utensils","catering"],
        required:true,
    },
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
InventorySchema.pre("save",async function () {
  if (!this.InventoryId) {
    const rand = Math.floor(100 + Math.random() * 900);
    this.InventoryId = `PI-${Date.now().toString().slice(-6)}${rand}`;
  }
 
});
InventorySchema.pre("save",async function(){
    this.status=this.availableQuantity>0?"Available":"Out of stock";
   
})
const InventoryModel=mongoose.model("Inventory",InventorySchema);
export default InventoryModel;