const Education = require('../models/Education-models')
//const CatchAsync = require("../utils/catch-async.js");

exports.createEducation = (async (req, res) => {
  const {universityAttended, startYear, endYear, degree,} = req.body;
  const education = await Education.create({
    universityAttended,
    startYear,
    endYear,
    degree,
  });
  res.status(200).send(education)
});




exports.getEducation  = async (req, res) => {
    try{
      const id = req.params.id
        const education  = await Education.findById(id)
        res.status(200).send(education)
    }
     catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}


// Update A User
exports.updateEducation =  (async (req, res, next) => {
  const education = await Education.findById(req.params.id);
  if (!education) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  }
const universityAttended = req.body.universityAttended === undefined ? education.UniversityAttended : req.body.universityAttended;
const startYear = req.body.startYear === undefined ? education.startYear : req.body.startYear;
const endYear = req.body.endYear === undefined ? education.endYear : req.body.endYear;
const degree = req.body.degree === undefined ? education.degree : req.body.degree;
const update = { universityAttended, startYear, endYear, degree };
const updatedEducation = await Education.findByIdAndUpdate(req.params.id, update, 
    {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      education: updatedEducation,
    },
  });
});









// exports.updateEducation = (async (req, res, next) => {
//     const education = await Education.findById(req.params.id);
    // if (!education ) {
    //   return next(
    //     new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    //   );
    // }
    // if (req.education.id !== req.params.id) {
    //   return next(new ErrorObject("You are not authorised", 403));
    // }
    // const UniversityAttended = req.body.UniversityAttended === undefined ? education.UniversityAttended : req.body.UniversityAttended;
    // const  startYear = req.body. startYear === undefined ? education.startYear : req.body. startYear ;
    // const endYear = req.body.endYear === undefined ? education.endYear : req.body.endYear;
    // const  degree = req.body.degree === undefined ? education.degree : req.body.degree
    // const update = { UniversityAttended, startYear, endYear, degree };
    // const updatedEducation  = await Education.findByIdAndUpdate(req.params.id, update,);
    // res.status(200).send(updatedEducation)
    // });




exports.deleteEducation  = (async (req, res) => {
        const education  = await Education.findById(req.params.id)
        if (!education ) {
            return res.status(400).json({
                status: 'fail',
                message: `There is no education details with Id ${req.params.id}`
            })
        }
        await Education.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'Education deleted successfully'
        })
      });