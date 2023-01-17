const Job = require("../models/job-models");
const ErrorObject = require("../utils/error");


// Creating jobs
exports.createJob = (async (req, res) => {
  try {
    
    const { jobTitle, description, isAvailable, category, } = req.body
    const job = await Job.create({
      jobTitle,
      description,
      isAvailable,
      category
    });
    res.status(200).send(job)

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
}),


//creating many JObs
  exports.createAllJob = (async (req, res) => {
    try {

      let createdJob = [];
      let jobErrors = []
      const { jobs } = req.body;

      for (i=0;i<jobs.length;i++)  {
        console.log(jobs[i]) 
        const { jobTitle, description, isAvailable, category } = jobs[i];
        console.log({jobTitle})
        try {
          const job = await Job.create({
            jobTitle,
            description,
            isAvailable,
            category
          });
          createdJob.push(job)
        } catch (error) {

          jobErrors.push({ error })
        }
      }

      res.status(200).send({ createdJob })

    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
  }),



//Getting 
  exports.getAllJob = async (req, res) => {
    try {
      const job = await Job.find()
      res.status(200).send(job)

    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
  }


exports.getJob = async (req, res) => {
  try {
    const id = req.params.id;  //http://localhost:4000/api/v1/job/63978f08dedebaf8e8e6d019
    console.log({ id })
    const job = await Job.findById(id)
    res.status(200).send(job)

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
}


exports.updateJob = (async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  }
const jobTitle = req.body.jobTitle === undefined ? job.jobTitle : req.body.jobTitle;
const description = req.body.discription === undefined ? job.description : req.body.discription;
const isAvailable = req.body.isAvailable === undefined ?  job.isAvailable : req.body.isAvailable;
const category = req.body.category === undefined ?  job.category : req.body.category; 
const update = {jobTitle, description, isAvailable, category};
const updatedJob = await Job.findByIdAndUpdate(req.params.id, update, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      job: updatedJob,
    },
  });
});



exports.deleteJob = async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return next(
      new ErrorObject(`There is no Job with the id ${req.params.id}`, 400)
    );
  }

  await Job.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
};
