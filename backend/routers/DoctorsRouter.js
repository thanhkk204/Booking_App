import express from 'express'
import { deleteDoctor, findAllDoctors, findSingleDoctor, getDoctorProfile, updateDoctor } from '../controllers/doctorsController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router()

router.get("/:id", findSingleDoctor)
router.get("/", findAllDoctors)
router.put("/:id", authenticate, restrict(['doctor']), updateDoctor)
router.delete("/:id", authenticate, restrict(['doctor']), deleteDoctor)

router.get("/profile/me", authenticate, restrict(['doctor']), getDoctorProfile)
export default router