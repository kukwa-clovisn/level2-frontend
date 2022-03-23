const express = require("express");
const http = require("http");
const path = require("path");
const userEndpoint = require("./middlewares/user_sign_up");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const registerRoute = require('./routes/register')
const cors = require("cors");
const logger = require("morgan");
const mongoose = require('mongoose');
require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(
     express.urlencoded({
          extended: false,
     })
);
app.use(cookieParser());
app.use("/user", userEndpoint);
app.use(express.static(path.join(__dirname, "public")));
app.use(
     cors({
          origin: ["http://localhost:9000"]
     })
);
mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(res => console.log("mongodb connected....."))

// const store = new mongodbConnect({
//      uri: mongo_uri,
//      collection: "sessions"
// })
app.use('/register', registerRoute);

app.get("/", (req, res) => {
     res.json({
          response: "this is codingherald sever side rendering",
     });
});

module.exports = app;