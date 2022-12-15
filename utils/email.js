const cron = require('node-cron')
const nodemailer = require ("nodemailer");

const sendEmail = async(options) =>{
    const transport = nodemailer.createTransport({
service: "gmail",
auth:{
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
},
    });
const mailOptions = {
    from: "kingxleey@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
};
await transport.sendEmail(mailOptions);
};


cron.schedule("* 01 * * *", function () {
     console.log("Runnig a task every minute");
      let mailOptions = {
          from: "support@gmail.com",
          to: "any_user_mail@gmail.com",
          subject: `Cron job`,
          text: `Hi there, this email was automatically sent by node cron`
        };
transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
           throw error;
         } else {
           console.log("Email successfully sent by cron!");
         }
       });
});
module.exports = sendEmail;




