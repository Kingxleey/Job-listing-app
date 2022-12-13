const express = require("express");
const {
  createJob,
  createAllJob,
  deleteJob,
  updateJob,
  getJob,
  getJobs,  
} = require("../controllers/job-controllers");
const router = express.Router();

router.post("/", createJob);
router.post("/many", createAllJob);
router.delete("/:id", deleteJob);
router.patch("/:id", updateJob);
router.get("/:id", getJob); //http://localhost:4000/api/v1/job/63978f08dedebaf8e8e6d019
router.get("/", getJobs); 
// router.get("/", getJob); //http://localhost:4000/api/v1/job?id=63978f08dedebaf8e8e6d019
module.exports = router;


