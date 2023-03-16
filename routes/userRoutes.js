import express from 'express'
const router = express.Router()

import { getProfile, updateProfile } from '../controllers/userController.js'

router.route('/:profileId').get(getProfile).patch(updateProfile)
export default router