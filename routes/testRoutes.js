import express from "express";
import { testPostController } from "../controller/testController.js";
import userAuth from "../middlewars/authMiddleware.js";


//router obj
const router = express.Router();

//routes
router.post('/test-post', userAuth,testPostController);

//export
export default router;