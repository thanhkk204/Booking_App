import jsonWebToken from 'jsonwebtoken'
import UserModule from '../modules/UserModule.js'
import DoctorModule from '../modules/DoctorModule.js'

export const authenticate = async (req, res, next)=>{
    // get token from headers
    const authToken = req.headers.authorization
    // check token is exist 
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res
        .status(401)
        .json({success: false, message: "No toke, authorization denied"})
    }

    try {
        const token = authToken.split(' ')[1]

        const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = decoded.id 
        req.role = decoded.role

        next()
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({message: "Token is exprired"})
        }
        return res.status(401).json({success: false, message: "Invalid token"})
    }
}

export const restrict = roles => async(req, res, next)=>{
    const userId = req.userId

    let user;

    const patient = await UserModule.findById(userId)
    const doctor = await DoctorModule.findById(userId)

    if(patient){
        user = patient
    }
    if (doctor) {
        user = patient
    }
    if (!roles.includes(user.role)) {
        return res
        .status(401)
        .json({success: true, massage: "You're not authorized"})
    }
    next()
}