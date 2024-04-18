import express from 'express'
import { deleteUser, findAllUsers, findSingleUser, getMyAppointment, getUserProfile, updateUser } from '../controllers/usersController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router()

router.get("/:id",authenticate,restrict(['patient']), findSingleUser)
router.get("/",authenticate,restrict(['admin']), findAllUsers)
router.put("/:id",authenticate,restrict(['patient']), updateUser)
router.delete("/:id",authenticate,restrict(['patient']), deleteUser)
router.get("/profile/me",authenticate,restrict(['patient']), getUserProfile)
router.get("/appointment/my-appointment",authenticate,restrict(['patient']), getMyAppointment)
export default router