const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({

    
  UniversityAttended: {
      type: String,
      trim: true,
      required: true, 
     },
    
    startYear: {
      type: String,
    },
    
  endYear: {
    type: String,
    default: true,
    },
   
degree: {
      type: String,
 
    },
},

  { timestamps: true }

);
const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
