const express = require('express');
const UserModel = require('../model/userModel');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const bcrypt = require('bcrypt');
const fs = require('fs');


module.exports = {

    userSignup: async (req, res) => {
        try {
            let userEmail = req.body.email
            const exist = await UserModel.findOne({ email: userEmail });
            if (exist) {
                res.json({ status: false, message: 'you are Already a Member 🥰' });
            } else {
                const securePassword = await bcrypt.hash(req.body.password, 10);
                const userCreate = UserModel.create({
                    userName: req.body.userName,
                    email: userEmail,
                    phone: req.body.phoneNumber,
                    password: securePassword
                })

                res.json({ status: true, message: 'Your Signup is Success 😎' });
            }
        } catch (error) {
            res.json({ status: false, message: "oops catch error" })
            console.log(error)
        }
    },
    ///////////////////////
    userLogin: async (req, res) => {
        try {
            const userCheck = await UserModel.findOne({ email: req.body.email });
            if (!userCheck) {
                res.json({ status: false, message: 'Email Not Found 🥺' })
            } else {

                const checkPassword = await bcrypt.compare(req.body.password, userCheck.password);
                if (!checkPassword) {
                    res.json({ status: false, message: "Wrong Password" })
                } else {
                    const token = jwt.sign({
                        name: userCheck.userName,
                        email: userCheck.email,
                        id: userCheck._id
                    }, 'secret123', { expiresIn: '7d' });

                    res.json({ status: true, message: "Your Login is Success 😎 ", token: token });
                }
            }
        } catch (error) {
            res.json({ status: false, message: "oops catch error" })
            console.log(err)
        }
    },
    ////////////////////////////////
    verifyToken: async (req, res) => {
        try {
            const decodeToken = jwt.verify(req.body.token, 'secret123');
            const userCheck = await UserModel.findOne({ email: decodeToken.email });

            if (userCheck.image) {
                userCheck.image = `http://localhost:4000/${user.image}`
            } else {
                userCheck.image = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
            }

            return res.status(200).json({ message: "token valid", user, token: true });

        } catch (error) {
            res.json({ status: 'error', error: "invalid token", token: false })
            console.log(err)
        }
    },


}
