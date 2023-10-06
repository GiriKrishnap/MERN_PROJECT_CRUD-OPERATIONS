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
                res.json({ status: 'userRegistered', error: 'user already registered' });
            } else {
                const securePassword = await bcrypt.hash(req.body.password, 10);
                const userCreate = UserModel.create({
                    userName: req.body.userName,
                    email: userEmail,
                    phone: req.body.phoneNumber,
                    password: securePassword
                })

                res.json({ status: 'ok' })

            }
        } catch (error) {
            console.log(error)
        }
    }
    //////////////////////////////


}
