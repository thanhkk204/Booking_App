import express from "express"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose"
import authRouter from './routers/AuthRouter.js'
import userRouter from './routers/UsersRouter.js'
import doctorRouter from './routers/DoctorsRouter.js'
import reviewRouter from './routers/ReviewsRouter.js'
const app = express()

const port = process.env.PORT || 9999
// Middle ware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// Routers
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/doctor', doctorRouter)
app.use('/api/v1/review', reviewRouter)

// connect to database
mongoose.set('strictQuery', false)
const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB database is connected`);
  } catch (error) {
    console.log(error);
    console.log(`MongoDB database connection is failed`);
    
  }
}
app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})
