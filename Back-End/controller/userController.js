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
                    phone: req.body.phone,
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
            console.log(error)
        }
    },
    ////////////////////////////////
    verifyToken: async (req, res) => {
        try {
            const decodeToken = jwt.verify(req.body.token, 'secret123');
            const userCheck = await UserModel.findOne({ email: decodeToken.email });

            if (userCheck.image) {
                userCheck.image = `http://localhost:4000/${userCheck.image}`
            } else {
                userCheck.image = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`
            }

            return res.status(200).json({ message: "token valid", userCheck, token: true });

        } catch (error) {
            res.json({ status: 'error', error: "invalid token", token: false })
            console.log(error + " verify Catch error")
        }
    },
    //////////////////////
    userImageUpdate: async (req, res) => {
        try {
            let Token = req.params.id;
            let token2 = JSON.parse(Token)
            const decodedToken = jwt.verify(token2, 'secret123');
            const user = await UserModel.findOne({ _id: decodedToken.id });
            if (user) {
                const update = await UserModel.updateOne({ _id: decodedToken.id }, {
                    $set: {
                        image: req.files.image[0].filename
                    }
                })

                const image = `http://localhost:4000/${req.files.image[0].filename}`

                return res.status(200).json({ message: "user found", image });
            }
            else {
                console.log("image Update error")
                return res.json({ status: "error", message: "photo couldn't update" })
            }

        } catch (err) {
            console.log(err, "this one is image catch err")
            res.json({ status: "error", message: "photo catch error" })

        }
    }

}
