import bookingModel from "../model/Bookings.js"

export const adminBookingController = async(req, res) => {
    console.log("admin booking controller called");
    try {
        const bookings=await bookingModel.find().populate('user',"name email role").sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            count:bookings.length,
            bookings
        })
        
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Failed to fetch bookings",
            error:error.message
        }
        );

    }
};

export const updateStatus=async(req,res)=>{
    try{
        const {id}=req.params;
        const {status}=req.body;
        if(!["Pending","Confirmed","Rejected","Completed"].includes(status)){
            return res.status(400).json({  
                success:false,
                message:"Invalid status value. Status must be either Pending, Confirmed, or Rejected."
            })
        } 
        const booking=await bookingModel.findByIdAndUpdate(id,
           {Status:status},
            {new:true,runValidators:false}
        );
        if(!booking){
            return res.status(404).json({
                success:false,
                message:"Booking not found"
            })
        }
       
        
        return res.status(200).json({
            success:true,
            message:"status updated successfully",
            booking
        })  

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Failed to update booking",
            error:error.message
        })

    }
}

