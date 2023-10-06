const mongoose = require('mongoose');

const User = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String
    },
})

const model = mongoose.model('UserData', User);

module.exports = model

