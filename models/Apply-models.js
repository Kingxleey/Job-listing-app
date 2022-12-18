const mongoose = require("mongoose")
const  applySchema = new mongoose.Schema({

  fullName: {
    type: String,
    // trim: true,
    required: true, 
   },
  
  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  
  //educational model
  universityAttended: {
    type: String,
    // trim: true,
    required: true, 
   },
  
  startYear: {
    type: String,
    required: true,
  },
  
  endYear: {
  type: String,
  default: true,
  },

 universityDegree: {
  type: String,
  default: true,

 },

 
  //Experience model
  companyName: {
    type: String,
    trim: true,
    required: true, 
   },
  
  description: {
  type: String,
  required: true, 
  },
  

  jobId: {
    type: String,
    required: true, 
    },
 
startDate: {
type: Number,
required: true,
  },

endDate: {
type: Number,
 required: true,
    },

},

{ timestamps: true }

);
const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;
