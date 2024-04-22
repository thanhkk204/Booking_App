import express from 'express'
import { getAllReviews, createReview } from '../controllers/reviewsController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = express.Router({mergeParams: true})

router.route('/').get(getAllReviews).post(authenticate , restrict(['patient']), createReview)
// router.post('/' , getAllReviews)

export default router