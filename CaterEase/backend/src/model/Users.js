import mongoose from "mongoose"
const Schema= mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
    },
    email:{
        type:String,
        lowercase:true,
     
       
        required:[true,"email is required"],
        
    },
     password:{
        type:String,
        required:[true,"Password is required"],
        minlength:6,
    },
    role:{
        type:String,
        enum:["customer","admin"],
        default:"customer"
        
    },
},
{timestamps:true}
);

const UserModel=mongoose.model("Users",UserSchema);

export default UserModel