import express from 'express'
const router = express.Router()

import { getProfile } from '../controllers/userController.js'

router.route('/:profileId').get(getProfile)
export default router