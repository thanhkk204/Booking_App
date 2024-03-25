import express from 'express'
import { deleteUser, findAllUsers, findSingleUser, updateUser } from '../controllers/usersController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router()

router.get("/:id",authenticate,restrict(['patient']), findSingleUser)
router.get("/",authenticate,restrict(['admin']), findAllUsers)
router.put("/:id",authenticate,restrict(['patient']), updateUser)
router.delete("/:id",authenticate,restrict(['patient']), deleteUser)
export default router