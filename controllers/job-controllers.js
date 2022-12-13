const Job = require("../models/job-models");


exports.createJob = (async (req, res) => {
  try {
    // NO AUTHORIZATION YET

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

  exports.getJobs = async (req, res) => {
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




exports.updateJob = async (req, res) => {
  try {
    // only site owner can update product in their shop
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res
        .status(404)
        .json({ error: true, message: "job not found in your shop" });
    }
    const Job = await Job.findOneAndUpdate()
    res.status(200).json({
      error: false,
      message: "job updated",
      data: Job,

    });
  } catch (error) {
    console.log(error?.message);
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};


exports.deleteJob = async (req, res, next) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return next(
      new ErrorObject(`There is no Job with the id ${req.params.id}`, 400)
    );
  }

  await Job.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
};
