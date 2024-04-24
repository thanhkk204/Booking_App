import express from 'express'
import { MoMopayment } from '../controllers/MoMoController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router()

router.post('/', authenticate, restrict(['patient']), MoMopayment)
export default router