const express = require("express");
const {
createApply,
  deleteApply,
  updateApply,
} = require("../controllers/Apply-controllers");
const router = express.Router();

router.post ('/', createApply)
router.delete('/', deleteApply);
router.patch('/:id', updateApply);
module.exports = router;
