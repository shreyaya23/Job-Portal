import express from 'express';
import userAuth from '../middlewars/authMiddleware.js'
import { getUserController, updateUserController } from '../controller/userController.js';

//router objext
const router = express.Router();


//routes
//GET USER || GET
router.post('/getUser', userAuth, getUserController)

//UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController)

export default router