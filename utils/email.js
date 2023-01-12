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

module.exports = sendEmail;




