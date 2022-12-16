const Apply = require('../models/Apply-models')
//const CatchAsync = require("../utils/catch-async.js");


//creating the apply detail
exports.createApply = (async (req, res) => {
  const {fullName, email, phoneNumber, universityDegree,} = req.body;
  const apply = await Apply.create({
    fullName,
   email,
   phoneNumber,
    universityDegree,
  });
  res.status(200).send(apply)
});


// Update Apply  detail
exports.updateApply =  (async (req, res, next) => {
  const apply = await Apply.findById(req.params.id);
  if (!apply) {
    return res.status(400).send(err)
  }
const fullName = req.body.fullName === undefined ? apply.fullName : req.body.fullName;
const phoneNumber = req.body.phoneNumber === undefined ? apply.phoneNumber : req.body.phoneNumber;
const email = req.body.email === undefined ? apply.email : req.body.email;
const universityDegree = req.body.universityDegree === undefined ? apply.universityDegree : req.body.universityDegree;
const update = { fullName, phoneNumber, email, universityDegree };
const updatedApply = await Apply.findByIdAndUpdate(req.params.id, update, 
    {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      apply: updatedApply,
    },
  });
});


//deleting Education detail
exports.deleteApply = (async (req, res) => {
        const apply  = await Apply.findById(req.params.id)
        if (!apply ) {
            return res.status(400).json({
                status: 'fail',
                message: ` details not found ${req.params.id}`
            })
        }
        await Apply.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'deleted successfully'
        })
      });