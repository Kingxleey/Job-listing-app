const express = require("express");
const {
createApply,
  deleteApply,
  updateApply,
  getApply
} = require("../controllers/Apply-controllers");
const router = express.Router();

router.post ('/:jobId', createApply)
router.delete('/', deleteApply);
router.get('/:id', getApply);
router.patch('/:id', updateApply);
module.exports = router;