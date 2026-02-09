import Users from '../model/Users.js'
import jwt from'jsonwebtoken'
export const ProtectMiddleware=async(req,res,next)=>{
    console.log("protect middleware called");
    try{
        const authHeader=req.headers.authorization;
        //check if headers exists or not 
        console.log(authHeader)
        if(!authHeader){
            return res.status(401).json({
                success:false,
                message:"Unauthorized, token missing"
            })
        }
        //verify token
        const decodedtoken=jwt.verify(authHeader,process.env.JWT_SECRET);
        console.log(decodedtoken.id)
        const user=await Users.findById(decodedtoken.id).select("-password");
        if(!user){
        return res.status(401).json({
        success: false,
        message: "User not found",
      });
        }
        req.user=user;
        next();
        

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Not authorized ,token invalid"
        })

    }
}
