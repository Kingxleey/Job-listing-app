const mongoose = require("mongoose");
const experienceSchema = new mongoose.Schema({

    
  companyName: {
      type: String,
      trim: true,
      required: true, 
     },
    
    description: {
    type: String,
    required: true, 
    },
    
  jobTitle: {
    type: String,
    default: true,
    },
   
startDate: {
type: Number,
required: [true, "description is required"],
    },

 endDate: {
type: Number,
   required: [true, "description is required"],
      },
},

   { timestamps: true }

);
const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
