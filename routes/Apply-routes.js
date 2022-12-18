const express = require("express");
const{
protect,
restrictTo,
} = require ("../controllers/auth-controllers");

const {
createApply,
  deleteApply,
  updateApply,
  getApply,
  getAllApply
} = require("../controllers/Apply-controllers");
const router = express.Router();

router.post ('/:jobId', protect, createApply)
router.delete('/', protect, restrictTo("admin"), deleteApply);
router.get('/:id', protect, getApply);
router.get('/', protect, getAllApply);
router.patch('/:id', protect, restrictTo("admin"), updateApply);
module.exports = router;