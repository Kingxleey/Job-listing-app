const Apply = require('../models/Apply-models')
const ErrorObject = require("../utils/error");
//const CatchAsync = require("../utils/catch-async.js");


//creating the apply detail

exports.createApply = (async (req, res) => {
try {
	  const jobId = req.params.jobId;
	
	  const {
	    fullName, phoneNumber, email, universityAttended, startYear, 
	    endYear,  universityDegree, companyName, description, startDate, endDate,} = req.body;
	
	
	  const apply = await Apply.create({
	  fullName, phoneNumber, email,universityAttended, startYear, 
	  endYear,  universityDegree, companyName, description, jobId, startDate, endDate,
	  });
	
	  const application = await Apply.findById(apply._id).populate('jobId')
	  res.status(200).send(application)
} catch (err) {
	  res.status(400).json({
        status: 'fail',
        message: err
      })
}
  });


  // Getting an application
  exports.getApply = async (req, res) => {
    try {
      const id = req.params.id;  
      console.log({ id })
      const apply = await Apply.findById(id).populate('jobId')
      res.status(200).send(apply)
  
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
  }
  
   // Getting an application
   exports.getAllApply = async (req, res) => {
    try {
    
      const apply = await Apply.find().populate("jobId")
      res.status(200).send(apply)
  
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
  }


// // Update Apply  detail
exports.updateApply =  (async (req, res, next) => {
  const apply = await Apply.findById(req.params.id);
  if (!apply) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  };

  
const updatedApply = await Apply.findByIdAndUpdate(req.params.id, req.body, 
    {
    new: true,
    runValidators: true,
  }).populate('jobId');
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














