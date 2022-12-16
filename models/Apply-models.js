const mongoose = require("mongoose")
const  applySchema = new mongoose.Schema({

  fullName: {
    type: String,
    trim: true,
    required: true, 
   },
  
  email: {
    type: String,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  
universityDegree: {
  type: String,
  default: true,
  }, 
},

{ timestamps: true }

);
const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;
