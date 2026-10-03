require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = require("./utils/connectDB");

app.use(express.json());
app.use(morgan("dev"));

app.use("api/v1/services", require("./routes/service.routes"));
app.use("api/v1/customers", require("./routes/customer.routes"));
app.use("api/v1/requests", require("./routes/maintenanceRequest.routes"));
app.use("api/v1/reviews", require("./routes/review.routes"));



connectDB(app);









