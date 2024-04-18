import UserModule from "../modules/UserModule.js"
import BookingModule from '../modules/BookingModule.js'
import DoctorModule from '../modules/DoctorModule.js'
export const updateUser = async (req, res) => {
  const id = req.params.id
  try {
    const userUpdated = await UserModule.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    )

    return res.status(200).json({
      success: true,
      message: "Successfully!",
      data: userUpdated,
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can't update",
    })
  }
}
export const findSingleUser = async (req, res) => {
  const id = req.params.id
  try {
    const user = await UserModule.findById(id)

    return res.status(200).json({
      success: true,
      message: "Successfully!",
      data: user,
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not Found",
    })
  }
}
export const findAllUsers = async (req, res) => {
  try {
    const users = await UserModule.find({}).select("-password")

    return res.status(200).json({
      success: true,
      message: "Successfully!",
      data: users,
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not Found",
    })
  }
}
export const deleteUser = async (req, res) => {
  const id = req.params.id
  try {
    await UserModule.findByIdAndDelete(id)
    return res.status(200).json({
      success: true,
      message: "Successfully delete user",
    })
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Can't delete",
    })
  }
}

export const getUserProfile = async (req, res)=>{
       const userId = req.userId

       try {
        const user = await UserModule.findById(userId)
        if (!user) {
          return res.status(401).json({success: false, message: "User not found"})
        }
        const {password, ...rest} = user._doc
        res.status(201).json({success:true, message: "Successfully", data: {...rest}})
       } catch (error) {
        res.status(501).json({message: "Something went wrong on server"})
      }
    }
    
export const getMyAppointment = async (req, res)=>{
      try {
        // get all user's booking
        const bookings = await BookingModule.find({user: req.userId})
        // filter to get doctorId
        const doctorIds = bookings.map(el=>el.doctor.id)
        // get doctor's information
        const doctors = await DoctorModule.find({_id: {$in: doctorIds}}).select('-password')

        res.status(201).json({success: true, message:"Appointments have been taken", data: doctors})
      } catch (error) {
        
        res.status(501).json({message: "Something went wrong on server"})
      }
}
