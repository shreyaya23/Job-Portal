import express from "express";
import userAuth from "../middlewars/authMiddleware.js";
import { createJobController , deleteJobController, getAllJobsController, 
    jobStatsController, updateJobController} from "../controller/jobsController.js";

const router = express.Router();

// Create Job || POST
router.post("/create-job", userAuth, createJobController);

//get jobs || get
router.get('/get-job', userAuth, getAllJobsController);


//update jobs || patch
router.patch('/update-job/:id', userAuth, updateJobController);

//delete jobs || delete
router.delete('/delete-job/:id', userAuth, deleteJobController);

//stats jobs || get
router.get('/job-stats', userAuth, jobStatsController);

export default router;
