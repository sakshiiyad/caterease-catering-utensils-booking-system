
import UserModel from "../model/users.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
 export const Signup=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        //validate on server side
        if(!name||!email||!password){
            return res.status(400).json({
                success:false,
                message:"All the fields are required"
            })
        }
        //check user exists in the DB
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(409).json({
                success:false,
                message:"user already exists",
            })
        }
        //hash the password 
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);

        //create newuser in the DB with the hashPassword
        const NewUser=await UserModel.create({
            name,
            email,
            password:hashPassword,
            role:"customer"
        });

        //generate jwt token
        const token=jwt.sign(
            {id:NewUser._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        return res.status(201).json({
            success:true,
            message:"User created successfully",
            user:{
                id:NewUser._id,
                name:NewUser.name,
                email:NewUser.email
            },
            token,
        })


    }
    catch(error){
        console.log("Error in signup",error)
        return res.status(500).json({
            success:false,
            message:"Internal Server Occur"
        });

    }

}

export const Login=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user does not exists"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Unauthorized, Invalid Credentials"
            })
        }
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )
        return res.status(201).json({
            success:true,
            message:"Login successfull",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role

            }
        })




    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })

    }

} 