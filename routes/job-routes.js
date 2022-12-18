const express = require("express");
const {

  protect,
  restrictTo,

} = require ("../controllers/auth-controllers");
const {
  createJob,
  createAllJob,
  deleteJob,
  updateJob,
  getJob,
  getAllJob,  
} = require("../controllers/job-controllers");
const router = express.Router();

router.post("/", protect, restrictTo("admin"), createJob);
router.post("/many", protect, restrictTo("admin"), createAllJob);
router.delete("/:id",protect, restrictTo("admin"), deleteJob);
router.patch("/:id",protect, restrictTo("admin"), updateJob);
router.get("/:id",protect, getJob); //http://localhost:4000/api/v1/job/63978f08dedebaf8e8e6d019
router.get("/",protect, getAllJob); 
// router.get("/", getJob); //http://localhost:4000/api/v1/job?id=63978f08dedebaf8e8e6d019
module.exports = router;


