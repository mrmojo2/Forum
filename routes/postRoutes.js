import express from 'express'
const router = express.Router()

import { getAllPosts, getSinglePost, createPost, updatePost, deletePost } from '../controllers/postController.js'
import { authenticateUser, authorizePermissions } from "../middlewares/atuh.js";


router.route('/').get(getAllPosts).post(authenticateUser, createPost)
router.route('/:id').get(getSinglePost).patch(authenticateUser, updatePost).delete(authenticateUser, deletePost)

export default router