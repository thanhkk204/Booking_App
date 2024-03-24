import express from 'express'
import { deleteUser, findAllUsers, findSingleUser, updateUser } from '../controllers/usersController.js'
const router = express.Router()

router.get("/:id", findSingleUser)
router.get("/", findAllUsers)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
export default router