const Apply = require('../models/Apply-models')
const ErrorObject = require("../utils/error");
//const CatchAsync = require("../utils/catch-async.js");


// //creating the apply detail

// exports.createApply = (async (req, res) => {

//   const {
//     fullName, phoneNumber, email,universityAttended, startYear, 
//     endYear,  universityDegree, companyName, description, jobTitle, startDate, endDate,} = req.body;


//   const apply = await Apply.create({
//   fullName, phoneNumber, email,universityAttended, startYear, 
//   endYear,  universityDegree, companyName, description, jobTitle, startDate, endDate,
//   });
//   res.status(200).send(apply)
//   });
exports.createApply= (async (req, res) => {
  try {
    let createdApply = [];
    let applyErrors = []
    const {applys} = req.body;

    for (i=0;i<applys.length;i++)  {
      console.log(applys[i])
      const { fullName, phoneNumber, email,universityAttended, startYear, 
   endYear,  universityDegree, companyName, description, jobTitle, startDate, endDate,} = applys[i];
   console.log({fullName})
      try {
        const apply = await Apply.create({
          fullName, phoneNumber, email,universityAttended, startYear, 
   endYear, universityDegree, companyName, description, jobTitle, startDate, endDate,
        });
        createdApply.push(apply)
      } catch (error) {

        applyErrors.push({ error })
      }
    }

    res.status(200).send({ createdApply })

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
}),

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




















      //..........................................................................

      //educational controller

//creating edcation detail
// exports.createEducation = (async (req, res) => {
//   const {universityAttended, startYear, endYear, degree,} = req.body;
//   const education = await Education.create({
//     universityAttended,
//     startYear,
//     endYear,
//     degree,
//   });
//   res.status(200).send(education)
// });



// //geting all education detail
// exports.getEducation  = async (req, res) => {
//     try{
//       const id = req.params.id
//         const education  = await Education.findById(id)
//         res.status(200).send(education)
//     }
//      catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
// }


// // Update educattion detail
// exports.updateEducation =  (async (req, res, next) => {
//   const education = await Education.findById(req.params.id);
//   if (!education) {
//     return next(
//       new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
//     );
//   }
// const universityAttended = req.body.universityAttended === undefined ? education.UniversityAttended : req.body.universityAttended;
// const startYear = req.body.startYear === undefined ? education.startYear : req.body.startYear;
// const endYear = req.body.endYear === undefined ? education.endYear : req.body.endYear;
// const degree = req.body.degree === undefined ? education.degree : req.body.degree;
// const update = { universityAttended, startYear, endYear, degree };
// const updatedEducation = await Education.findByIdAndUpdate(req.params.id, update, 
//     {
//     new: true,
//     runValidators: true,
//   });
//   res.status(200).json({
//     status: "success",
//     data: {
//       education: updatedEducation,
//     },
//   });
// });


// //deleting Education detail
// exports.deleteEducation  = (async (req, res) => {
//         const education  = await Education.findById(req.params.id)
//         if (!education ) {
//             return res.status(400).json({
//                 status: 'fail',
//                 message: `There is no education details with Id ${req.params.id}`
//             })
//         }
//         await Education.findByIdAndDelete(req.params.id)
//         res.status(204).json({
//             status: 'Education deleted successfully'
//         })
//       });







// //...............................................................................

//       //EXPERIENCE CONTROLLERS
      

// // exports.createExperience = (async (req, res) => {
// //   try{
// //       // NO AUTHORIZATION YET
// //       const { companyName, description, jobTitle, startDate, endDate} = req.body
// //        const experience = await Experience.create({
// //           companyName,
// //           description,
// //           jobTitle,
// //           startDate,
// //           endDate,
// //         });
// //       res.status(200).send(experience)
      
// //   } catch (err) {
// //       res.status(400).json({
// //           status: 'fail',
// //           message: err
// //       })
// //   }
// // }),

// // exports.getExperience = async (req, res) => {
// //   try {
// //     const id = req.params.id;  //http://localhost:4000/api/v1/job/63978f08dedebaf8e8e6d019
// //     console.log({ id })
// //     const experience = await Experience.findById(id)
// //     res.status(200).send(experience);

// //   } catch (err) {
// //     res.status(400).json({
// //       status: 'fail',
// //       message: err
// //     })
// //   }
// // }

// //Getting all experience
// exports.getExperience = async (req, res) => {
// try {
//   const experience = await Experience.findById(req.params.id);
//   res.status(200).send(experience)

// } catch (error) {
//   res.status(400).json({
//     status: "fail",
//     message: error,
//   });
// }
// };


// // Update jobseeker experience
// exports.updateExperience = (async (req, res, next) => {
// const experience = await Experience.findById(req.params.id);
// if (!experience) {
//   return next(
//     new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
//   );
// }
// const companyName = req.body.companyName === undefined ? experience.companyName : req.body.companyName;
// const discription = req.body.discription === undefined ? experience.discription : req.body.discription;
// const jobTitle = req.body.jobTitle === undefined ? experience.jobTitle : req.body.jobTitle;
// const startDate = req.body.startDate === undefined ? experience.startDate : req.body.startDate;
// const endDate = req.body.endDate === undefined ? experience.endDate : req.body.endDate;
// const update = {companyName, discription,jobTitle, startDate, endDate };
// const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, update, {
//   new: true,
//   runValidators: true,
// });
// res.status(200).json({
//   status: "success",
//   data: {
//     experience: updatedExperience,
//   },
// });
// });


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
