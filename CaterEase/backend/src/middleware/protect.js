
import jwt from'jsonwebtoken'
export const ProtectMiddleware=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;
        //check if headers exists or not 
        if(!authHeader){
            return res.status(401).json({
                success:false,
                message:"Unauthorized, token missing"
            })
        }
        //verify token
        const decodedtoken=jwt.verify(authHeader,process.env.JWT_SECRET);
        req.user=decodedtoken.id
        next();
        

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Not authorized ,token invalid"
        })

    }
}
