const express = require("express");
const http = require("http");
const path = require("path");
const userEndpoint = require("./middlewares/user_sign_up");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const userRoute = require('./routes/user')
const dataRoute = require('./routes/data')
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
app.use(express.static(path.join(__dirname, "public")));
app.use(
     cors({
          origin: "*"
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
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/user', userRoute);
app.use('/data', dataRoute);

app.get("/", (req, res) => {
     res.json({
          response: "this is codingherald sever side rendering",
     });
});

module.exports = app;