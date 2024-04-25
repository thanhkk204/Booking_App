import express from 'express'
import { MoMopayment, updateBooking } from '../controllers/MoMoController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router()

router.post('/', authenticate, restrict(['patient']), MoMopayment)
router.put('/', authenticate, restrict(['patient']), updateBooking)
export default router