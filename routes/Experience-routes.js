const express = require("express");

const {
createExperience,
  getExperience,
  deleteExperience,
  updateExperience,
} = require("../controllers/Experience-controllers");
const router = express.Router();

router.post ('/', createExperience)
router.delete('/', deleteExperience);
router.patch('/:id', updateExperience);
router.get('/', getExperience);
module.exports = router;
