import React, { useState } from 'react'
import './Profile.css'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate();

    return (
        <motion.div
            className='main-div-home container-fluid col-12'
            initial={{ opacity: 0, scale: 0.6, y: 120, borderRadius: "20%", rotate: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, borderRadius: "3%", rotate: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                duration: 0.3, ease: 'linear'
            }}>

            <div className="col-12 mb-2">
                <img src="../assets/images/RoundLogo.png" alt="img" className='round-logo-login mb-2' />
                <h4 className='d-inline m-2 text-white'>Profile Page</h4>
            </div>

            <div className="row">
                <hr className='line' />

                <div className="col-md-6">

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: -60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.1
                        }}>
                        <img src="../assets/images/RoundLogo.png" alt="img" className='profile-picture mb-2 mt-3' />
                    </motion.div>

                </div>

                <div className="col-md-6">

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.1
                        }}>
                        <input type="text" className="profile-input" placeholder='Giri Krishna' readOnly />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.2
                        }}>
                        <input type="text" className="profile-input" placeholder='Girikrishna.p7@gmail.com' readOnly />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.3
                        }}>
                        <input type="text" className="profile-input" placeholder='8392839234' readOnly />
                    </motion.div>

                </div>
            </div>

            <div className="row mt-2">

                <div className="col-md-6">
                    <button type="submit" className='submit-button-home mt-4 mb-5 '>Update Photo
                        <i class="fa-solid fa-upload"></i>
                    </button>
                </div>

                <div className="col-md-6">
                    <Link to='/home'>
                        <button type="submit" className='submit-button-home mt-4 '>Go back
                            <i class="fa-solid fa-house"></i>
                        </button>
                    </Link>
                </div>

            </div>

            <hr className='line' />


        </motion.div>
       
    )
}

export default Profile