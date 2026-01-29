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
    },
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
             enum: ["Pending", "Confirmed", "Cancelled"],
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
const bookingModel=mongoose.model("Booking",bookingSchema);
export default bookingModel;