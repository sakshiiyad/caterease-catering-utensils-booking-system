import mongoose from 'mongoose';
const Schema=mongoose.Schema;
//only for utensils booking,optional for catering bookings
const UtensilsSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true,
    },
    pricePerDay:{
        type:Number,
        required:true,
    }
    
},
{_id:false} //dont want mongodb id
);

const bookingSchema=new Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users",
            required:true,
        },
        bookingType:{
            type:String,
            enum:["catering","utensils"],
            required:true,
        },
        bookingNumber:{
            type:String,
            unique:true,
        },
        eventDate:{
            type:Date,
            required:true,
        },
        totalPrice:{
            type:Number,
            required:true,
        },
        Status:{
            type:String,
             enum: ["Pending", "Confirmed", "Rejected"],
             default:"Pending",
        },
        cateringDetails:{
            packageName:{
                type:String,
            },
            guests:{
                type:Number,
                min:1,
            },
            utensils:[UtensilsSchema],
        },
        utensilsDetails: {
            name:{
                type:String,
                required:function(){
                    return this.bookingType==="utensils";
                }
            },
            address: {
                type: String,
                 required:function(){
                    return this.bookingType==="utensils";
                }
            },
            phone:{
                type:Number,
                 required:function(){
                    return this.bookingType==="utensils";
                }
            },
            delivery:{
                type:String,
                enum:["pickup","delivery"],
                default:"pickup",
            },
            durationDays: {
            type:Number,
            min: 1,
      },
      items: [UtensilsSchema],
    },


    },
    {
        timestamps:true,
    }
    
);
bookingSchema.pre("save",async function () {
  if (!this.bookingNumber) {
    const rand = Math.floor(100 + Math.random() * 900);
    this.bookingNumber = `BN-${Date.now().toString().slice(-6)}${rand}`;
  }
 
});


const bookingModel=mongoose.model("Booking",bookingSchema);
export default bookingModel;