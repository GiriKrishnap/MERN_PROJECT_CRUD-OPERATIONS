import React, { useEffect } from 'react'
import './Home.css'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../util/axios';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../../Redux/userNameReducer';
import { changeImage } from '../../../Redux/userImageReducer';
import { verifyUserToken } from '../../../util/constants';


function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Logout?',
            text: "Do you want to Logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                dispatch({ type: 'logout' })
                navigate('/');
            }
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/');
        } else {
            const body = JSON.stringify({ token });
            console.log(verifyUserToken + " 🚀🚀🚀🚀verifyUserToken")
            console.log("🚀🚀body" + body)

            axios.post(verifyUserToken, body, { headers: { "Content-Type": "application/json" } }).then((res) => {
                console.log("🚀🚀🚀 res  -  " + res.data.userCheck)
                dispatch(change(res.data.userCheck.userName))
                dispatch(changeImage(res.data.userCheck.image));
            })
        }
    }, [navigate, dispatch])

    const userName = useSelector((state) => state.username);
    const userImage = useSelector((state) => {
        return state.userImage
    })

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
                <img src={userImage} alt="img" id='rotating-image' className='round-logo-home mb-2'
                />
                <h4 className='d-inline m-2 text-white'>Home Page</h4>
            </div>

            <hr className='line' />

            <motion.h1
                initial={{ opacity: 0, scale: 0, y: 60, blur: 20, filter: "blur(5px)", }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", }}
                transition={{
                    duration: 0.3, delay: 0.2, ease: 'linear',
                }}
                className='mt-4 text-white'>HELLO {userName}</motion.h1>


            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                transition={{
                    duration: 0.3, delay: 0.26, ease: 'linear'
                }}>

                <Link to='/profile'>
                    <button type="submit" className='submit-button-home mt-4'>Go To Profile
                        <i className="fa-solid fa-user m-1"></i>
                    </button>
                </Link>

            </motion.div>

            <hr className='line mt-4' />

            <motion.div
                initial={{ opacity: 0, scale: 0, y: 60, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                transition={{
                    duration: 0.3, delay: 0.29, ease: 'linear'
                }}>


                <button type="submit" className='logout-button-home mt-2'
                    onClick={handleLogout}>
                    Logout
                    <i className="fa-solid m-1 fa-square-arrow-up-right"></i>
                </button>

            </motion.div>

        </motion.div >
    )
}

export default Home