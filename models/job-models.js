const mongoose = require("mongoose");
//const validator = require("validator");
const jobSchema = new mongoose.Schema({

    jobTitle: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
     },
    
    description: {
      type: String,
          required: [true, "description is required"],
    },
    
  isAvailable: {
    type: String,
    default: true,
    },
   
category: {
      type: String,
      required: [true, "Category must exist"],
    },
},

  { timestamps: true }

);
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
