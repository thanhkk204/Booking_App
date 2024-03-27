import Review from "../modules/ReviewModule.js"
import Doctor from "../modules/DoctorModule.js"

// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})

        res
        .status(200)
        .json({success: true, message: "Successfully"})
    } catch (error) {
        res
        .status(401)
        .json({success: false, message: "Not found"})
    }
}
// Create reviews
export const createReview = async(req, res)=>{
    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId
    
    const newReview = new Review(req.body)

    try {
        const saveReview = await newReview.save()
        
        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: {reviews: saveReview._id}
        })
        res.status(200).json({success: true, message: "Review submitted", data: saveReview})
    } catch (error) {
        res.status(200).json({success: false, message: error.message})
        
    }
}