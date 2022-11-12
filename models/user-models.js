const mongoose = require ("mongoose");
const validator = require ("validator");
const bcryot = require("bcrypt");
const crypto = require ("crypto");
const { stringify } = require("querystring");
const userSchema = new mongoose.Schema({

fullName: {
    type: String,
    required: [true, 'user must have a name'],
},

email:{
    type:string,
    required: [true, "user must have a password"],
    unique: true,
    validate: [validator.isEmail, "pls enter a valid email address"],
},

password:{
    type: string,
    required: [true, "user must have a password"],
    unique: true,
    select: false,
    minlength: [8, "password must atleast have eight characters"],
    validate: {
    validator: function (val) {
        return  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[A-Za-z\d]{8,}/.test(val);
    } ,
    message:  "Password must contain at least a number, a lowercase and an uppercase alphabeth",
},
},

passwordConfirm:{
    type: string,
    required: [true, "user must confirm password"],
    select: false,
    minLength: [8, "passwordConfirm must not be more than eight character"],
    validate:{
    validator:function (val){
    return (val)=== this.password;
    },
},
message: "Password and confirm password are thesame",
},

role: {
    type: string,
   default: "user",
   enun:["user","admin", "shopeowner"],
  },
  passwordResetToken: String,
  passwordChangedAt: Date,
  passwordTokenExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
},
{ toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

userSchema.pre("save" , async function (next){
 if(!this. isModified ("password")){
    return next();
 }

 let salt = await bcrypt.genSalt(10);
 this.password = await bcrypt.hash (this.password, salt);
 this.passwordConfirmed = undefined;
 next();
});


userSchema.method.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString("hex");
this.passwordResetToken = crypto
.createHash("256")
.update(resetToken)
.digest('hex')

this.passwordTokenExpires = Date.now() + 10 * 60 * 1000;
return resetToken;
};

userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
      console.log(JWTTimestamp < this.passwordChangedAt);
      return JWTTimestamp < this.passwordChangedAt;
    }
    return false;
  };
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  


