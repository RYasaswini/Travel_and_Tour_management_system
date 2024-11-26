import Tour from '../models/Tour.js'
import Review from '../models/Review.js'

export const createReview = async (req, res) => {

    const tourId=req.params.tourId
   // console.log("Tour ID", tourId);
    const newReview= new Review({ ...req.body})
   // console.log("Body", newReview)
    try{
        //console.log("Inside the Catch Block")
        const savedReview= await newReview.save()
        //console.log("Review Saved")
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })
        //console.log("Pushed")
        res.status(200).json({success:true,message:'Review Submitted',
      data:savedReview})

    }catch(err){
       res.status(500).json({ success:false, message:"Failed to Submit"})
    }
};