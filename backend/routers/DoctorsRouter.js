import express from 'express'
import { deleteDoctor, findAllDoctors, findSingleDoctor, updateDoctor } from '../controllers/doctorsController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router()

router.get("/:id", findSingleDoctor)
router.get("/", findAllDoctors)
router.put("/:id", authenticate, restrict(['doctor']), updateDoctor)
router.delete("/:id", authenticate, restrict(['doctor']), deleteDoctor)
export default router