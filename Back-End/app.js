const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static(path.join(__dirname + 'images')));
mongoose.connect('mongodb://0.0.0.0:27017/ReactProject');

const userRouter = require('./route/userRoute');
app.use('/', userRouter);

app.listen(4000,() => console.log("server started listening to port 4000"));
module.exports = app;