const dotenv = require ("dotenv");
dotenv.config({path: "/config.env"});
const app = require ("/index.js");
const mongoose = require("mongoose");
const {port,DB_URL} = process.env;


mongoose.connect (DB_URL).then(()=>
    console.log("connected"))
    .catch((err)=>
        console.log(err));

        app.listen(port,()=>{
            console.log(`server is connnected to ${port}`)
        });
