import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';

import './Home.css'


function Home() {

    const navigate = useNavigate();


    return (
        <motion.div
            className='main-div-home container-fluid col-12'
            initial={{ opacity: 0, scale: 0.2, y: 200, borderRadius: "20%", rotate: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, borderRadius: "3%", rotate: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                duration: 0.3, ease: 'linear'
            }}>

            <div className="col-12">
                <img src="../assets/images/RoundLogo.png" alt="img" id='rotating-image' className='round-logo-login mb-2'
                />
                <h4 className='d-inline m-2 text-white'>Home Page</h4>
            </div>

            <hr className='line' />

            <motion.h1
                initial={{ opacity: 0, scale: 0, y: 60, blur: 20, filter: "blur(5px)", }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, filter: "blur(0px)", }}
                transition={{
                    duration: 0.3, delay: 0.2, ease: 'linear',
                }}
                className='mt-4 text-white'>HELLO GIRI KRISHNA</motion.h1>


            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                transition={{
                    duration: 0.3, delay: 0.15, ease: 'linear'
                }}>

                <Link to='/profile'>
                    <button type="submit" className='submit-button-home mt-4'>Go To Profile
                        <i class="fa-solid fa-user m-1"></i>
                    </button>
                </Link>

            </motion.div>

            <hr className='line mt-5' />

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                transition={{
                    duration: 0.3, delay: 0.27, ease: 'linear'
                }}>


                <button type="submit" className='logout-button-home mt-4'>Logout
                    <i class="fa-solid m-1 fa-square-arrow-up-right"></i>
                </button>

            </motion.div>

        </motion.div >
    )
}

export default Home