const express = require("express");

const {
createEducation,
getEducation,
  deleteEducation,
  updateEducation,
} = require("../controllers/Education-controllers");
const router = express.Router();

router.post ('/', createEducation);
router.delete('/:id', deleteEducation);
router.patch('/:id', updateEducation);
router.get('/', getEducation);
module.exports = router;
