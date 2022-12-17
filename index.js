const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const ErrorHandler = require ("./controllers/error controllers");
const userRouter = require("./routes/user-routes");
const jobRouter = require("./routes/job-routes");
const ApplyRouter = require("./routes/Apply-routes");

const app = express();

app.use(express.json());

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/apply", ApplyRouter);

app.all("*", (req, res, next) => {
  const err = new AppError(`http://localhost:7000${req.url} not found`, 404);
  next(err);
});

app.use(ErrorHandler);

module.exports = app;