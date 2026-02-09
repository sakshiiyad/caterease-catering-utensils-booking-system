export const isAdminMiddleware=(req,res,next)=>{
    console.log("isAdmin middleware called");
    try {
        if(req.user.role!=="admin"){
            return res.status(403).json({
                success:false,
                message:"forbidden,admin access only"
            });

        }
        next();
        
    } catch (error) {
        res.status(500).json({
            success:false,
           
            message:"Authorization failed"
        })
        
    }
};