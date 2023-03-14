import express from "express";
const router = express.Router()

import { login, register, getLoginUser, logout } from "../controllers/authController.js";
import { authenticateUser, authorizePermissions } from "../middlewares/atuh.js";

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/getLoginUser').get(authenticateUser, getLoginUser)
router.route('/logout').get(logout)

export default router