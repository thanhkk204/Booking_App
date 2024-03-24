import UserModule from "../modules/UserModule.js";

export const updateUser = async (req , res)=>{
    const id = req.params.id
    try {
        const userUpdated = await UserModule.findByIdAndUpdate({_id: id},{$set: req.body}, {new: true})

        return res
        .status(200)
        .json({
            success: true,
            data: userUpdated
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
export const findSingleUser = async (req , res)=>{
    const id = req.params.id
    try {
        const user = await UserModule.findById(id)

        return res
        .status(200)
        .json({
            success: true,
            data: user
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
export const findAllUsers = async (req , res)=>{
    try {
        const users = await UserModule.find({})

        return res
        .status(200)
        .json({
            success: true,
            data: users
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
export const deleteUser = async (req , res)=>{
    const id = req.params.id
    try {
        
        await UserModule.findByIdAndDelete(id)
        return res
        .status(200)
        .json({
            success: true,
            message: "Successfully delete user"
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