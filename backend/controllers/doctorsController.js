import DoctorModule from "../modules/DoctorModule.js";

export const updateDoctor = async (req , res)=>{
    const id = req.params.id
    try {
        const doctorUpdated = await DoctorModule.findByIdAndUpdate({_id: id},{$set: req.body}, {new: true})

        return res
        .status(200)
        .json({
            success: true,
            data: doctorUpdated
        })
    } catch (error) {
        return res
        .status(401)
        .json({
        success: false,
           message: "Can't update"
        })
        
    }
}
export const findSingleDoctor = async (req , res)=>{
    const id = req.params.id
    try {
        const doctor = await DoctorModule.findById(id).populate('reviews').select('-password')

        return res
        .status(200)
        .json({
            success: true,
            data: doctor
        })
    } catch (error) {
        return res
        .status(401)
        .json({
        success: false,
           message: "Not Found"
        })
        
    }
}
export const findAllDoctors = async (req , res)=>{

    const {query} = req.query
    let doctors;
   
    try {
        if (query) {
            doctors = await DoctorModule.find({
                isApproved: "approved",
                $or:[
                    {name: {$regex: query, $options: 'i'}},
                    {specialization: {$regex: query, $options: 'i'}}
                ]
            }).select("-password")
        }else{
         doctors = await DoctorModule.find({isApproved: "approved"}).select("-password")
        }

        return res
        .status(200)
        .json({
            success: true,
            data: doctors
        })
    } catch (error) {
        return res
        .status(401)
        .json({
        success: false,
           message: "Not Found"
        })
        
    }
}
export const deleteDoctor = async (req , res)=>{
    const id = req.params.id
    try {
        
        await DoctorModule.findByIdAndDelete(id)
        return res
        .status(200)
        .json({
            success: true,
            message: "Successfully delete Doctor"
        })
    } catch (error) {
        return res
        .status(401)
        .json({
        success: false,
           message: "Can't delete"
        })
        
    }
}