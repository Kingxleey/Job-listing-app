const Apply = require('../models/Apply-models')
const ErrorObject = require("../utils/error");
//const CatchAsync = require("../utils/catch-async.js");



//creating the apply detail

exports.createApply = (async (req, res) => {
  const jobId = req.params.jobId;

  const {
    fullName, phoneNumber, email, universityAttended, startYear, 
    endYear,  universityDegree, companyName, description, startDate, endDate,} = req.body;


  const apply = await Apply.create({
  fullName, phoneNumber, email,universityAttended, startYear, 
  endYear,  universityDegree, companyName, description, jobId, startDate, endDate,
  });
  res.status(200).send(apply)
  });



// // Update Apply  detail
exports.updateApply =  (async (req, res, next) => {
  const apply = await Apply.findById(req.params.id);
  if (!apply) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  };
const fullName = req.body.fullName === undefined ? apply.fullName : req.body.fullName;
const phoneNumber = req.body.phoneNumber === undefined ? apply.phoneNumber : req.body.phoneNumber;
const email = req.body.email === undefined ? apply.email : req.body.email;
const universityAttended= req.body.universityAttended === undefined ? apply.universityAttended : req.body.universityAttended;
const startYear = req.body.startYear === undefined ? apply.startYear : req.body.startYear;
const endYear = req.body.endYear === undefined ? apply.endYear : req.body.endYear;
const universityDegree = req.body.universityDegree === undefined ? apply.universityDegree : req.body.universityDegree;
const companyName = req.body.companyName === undefined ? apply.companyName : req.body.companyName;
const description = req.body.description === undefined ? apply.description : req.body.description;
const jobTitle = req.body.jobTitle === undefined ? apply.jobTitle : req.body.jobTitle;
const startDate = req.body.startDate === undefined ? apply.startDate : req.body.startDate;
const endDate= req.body.endDate === undefined ? apply.endDate : req.body.endDate;
const update = { fullName, phoneNumber, email, universityAttended, startYear, endYear,
   universityDegree, companyName,description, jobTitle,startDate, endDate};
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



// //deleting apply detail

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




















// //Deleting jobseeker experience
// exports.deleteExperience = async (req, res) => {
// try {
//   const experience = await Experience.findById(req.params.id);
//   if (!experience) {
//     return res.status(400).json({
//       status: "fail",
//       message: `There is no user with the id ${req.params.id}`,
//     });
//   }
//   await Experience.findByIdAndDelete(req.params.id);
//   res.status(204).json({
//     status: "successful deleted",
//   });
// } catch (err) {
//   res.status(400).json({
//     status: "fail",
//     message: err,
//   });
// }
// };
