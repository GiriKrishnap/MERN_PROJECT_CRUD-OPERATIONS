import React, { useEffect } from 'react'
import './DashBoard.css'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../util/axios';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../../Redux/userNameReducer';
import { changeImage } from '../../../Redux/userImageReducer';
import { verifyUserToken } from '../../../util/constants';


function Dashboard() {

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
                <img src={"../assets/images/RoundLogo.png"} alt="img" id='rotating-image' className='round-logo-login mb-2'
                />
                <h4 className='d-inline m-2 text-white'>Dashboard Page</h4>
            </div>

            <hr className='line' />

            <motion.h1
                initial={{ opacity: 0, scale: 0, y: 60, blur: 20, filter: "blur(5px)", }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", }}
                transition={{
                    duration: 0.3, delay: 0.2, ease: 'linear',
                }}
                className='mt-4 text-white'>Here to Assist, Admin 🐱‍👤</motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{
                    duration: 0.3, delay: 0.26, ease: 'linear'
                }}>

                <div className='row rounded m-0 '>
                    <div className='col-6 bg-info text-white '>
                        <i className="fa-solid fa-users fa-2xl m-4 mt-5" style={{ color: '#ffffff' }}></i>
                        <p>Users</p>
                    </div>
                    <div className="col-6 bg-white text-center ">
                        <h1 className='mt-4 font-weight-bold'>34 <i class="fa-solid fa-chart-simple"></i></h1>

                    </div>
                </div>

            </motion.div>


            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{
                    duration: 0.3, delay: 0.26, ease: 'linear'
                }}>

                <Link to='/admin/users'>
                    <button type="submit" className='submit-button-home mt-4'>Go UserList
                        <i className="fa-solid fa-user m-1"></i>
                    </button>
                </Link>

            </motion.div>

            <hr className='line mt-4' />

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{
                    duration: 0.3, delay: 0.29, ease: 'linear'
                }}>


                <button type="submit" className='logout-button-home mt-2'
                    onClick={""}>
                    Logout
                    <i className="fa-solid m-1 fa-square-arrow-up-right"></i>
                </button>

            </motion.div>

        </motion.div >
    )
}

export default Dashboard