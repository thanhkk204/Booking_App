import User from "../modules/UserModule.js"
import Doctor from "../modules/DoctorModule.js"
import jsonToken from "jsonwebtoken"
import bcrypt from "bcryptjs"

const generateToken = (user) => {
  return jsonToken.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  )
}
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body

  try {
    let user = null
    if (role === "patient") {
      user = await User.findOne({ email })
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email })
    }
    // If user exist
    if (user) {
      return res.status(404).json({ message: "Acconut was existed" })
    }
    // Hash code
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      })
    } else if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      })
    }
    await user.save()
    return res
      .status(200)
      .json({ success: true, message: "User successfuly created" })
  } catch (error) {
    return res
      .status(501)
      .json({ success: false, message: "Something was wrong on server" })
  }
}
export const login = async (req, res) => {
  const { email } = req.body
  try {
    let user = null
    const patient = await User.findOne({ email })
    const doctor = await Doctor.findOne({ email })

    if (patient) {
      user = patient
    } else if (doctor) {
      user = doctor
    }
    // check user

    if (!user) {
      return res.status(404).json({ message: "Account doesn't exist" })
    }
    // compare password
    const isRightPassword = await bcrypt.compare(req.body.password, user.password)
    if (!isRightPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Password isn't right" })
    }
    // get jsonToken
    const token = generateToken(user)

    const { password, role, appointment, ...rest } = user._doc
    return res.status(200).json({
      success: true,
      message: "Successfully Login",
      token,
      data: { ...rest},
      role
    })
  } catch (error) {
    return res
      .status(501)
      .json({ success: false, mesage: "There was something wrong on server" })
  }
}
