const Experience = require('../models/Experience-models')
// const CatchAsync = require("../utils/catch-async.js");

exports.createExperience = (async (req, res) => {
    try{
        // NO AUTHORIZATION YET
        const { companyName, description, jobTitle, startDate, endDate} = req.body
         const experience = await Experience.create({
            companyName,
            description,
            jobTitle,
            startDate,
            endDate,
          });
        res.status(200).send(experience)
        
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}),

// exports.getExperience = async (req, res) => {
//   try {
//     const id = req.params.id;  //http://localhost:4000/api/v1/job/63978f08dedebaf8e8e6d019
//     console.log({ id })
//     const experience = await Experience.findById(id)
//     res.status(200).send(experience);

//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err
//     })
//   }
// }


exports.getExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    res.status(200).send(experience)
  
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};






















// Update A User
exports.updateExperience = (async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);
  if (!experience) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  }
  const companyName = req.body.companyName === undefined ? experience.companyName : req.body.companyName;
const discription = req.body.discription === undefined ? experience.discription : req.body.discription;
const jobTitle = req.body.jobTitle === undefined ? experience.jobTitle : req.body.jobTitle;
const startDate = req.body.startDate === undefined ? experience.startDate : req.body.startDate;
const endDate = req.body.endDate === undefined ? experience.endDate : req.body.endDate;
const update = {companyName, discription,jobTitle, startDate, endDate };
const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, update, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      experience: updatedExperience,
    },
  });
});


exports.deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(400).json({
        status: "fail",
        message: `There is no user with the id ${req.params.id}`,
      });
    }
    await Experience.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "successful deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
