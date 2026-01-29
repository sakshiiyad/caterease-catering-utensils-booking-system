import bookingModel from "../model/Bookings.js";

export const createBooking=async(req,res)=>{
    try{
        //extract the required fields
        const {bookingType,eventDate}=req.body;
        //server side validation 
    if(!bookingType||!eventDate){
        return res.status(400).json({
            success:false,
            message:"bookingType and eventDate both field is required"
        })
    }
    //create base booking which is common in both type of booking
    let BookingData = 
        {
            user:req.user._id,
            bookingType,
            eventDate,
            status:"Pending",
            totalPrice:0,
        }
    
    //check bookingType and according to that add neccessary fields in base booking

    if(bookingType==="catering"){
        const{packageName,guests,utensils}=req.body;
        if(!packageName||!guests){
            return res.status(400).json({
                sucess:false,
                message:"packageName and guests fields both are required"
            })
        }
        BookingData.cateringDetails={
            packageName,
            guests,
            utensils:utensils||[],
        }
    }
    else  if(bookingType==="utensils"){
        const{durationDays,items}=req.body;
        if(!durationDays||!items){
            return res.status(400).json({
                sucess:false,
                message:"durationDays and items fields both are required"
            })
        }
        BookingData.utensilsDetails={
            durationDays,
            items
        }
    }
    else{
        return res.status(400).json({
            success:false,
            message:"invalid booking type. booking can't be created"
        })
    }
    //  Save to DB after completing the whole booking object
    const booking=await bookingModel.create(BookingData)
    return res.status(201).json({
        success:true,
        message:"Booking created successfully",
        booking
        
    });



    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}