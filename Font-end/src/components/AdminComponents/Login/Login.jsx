import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../util/axios';
import Swal from 'sweetalert2';
import { adminPostLogin } from '../../../util/constants';
import { motion } from "framer-motion"
////admin login ///////////////////////////////////////////////////////

function Login() {

    const navigate = useNavigate();
    ////useState
    const [rotation, setRotation] = useState(0);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /////
    const handleAdminLogin = async (e) => {
        const body = JSON.stringify({
            email,
            password
        });
        e.preventDefault()

        if (email === '' || password === '') {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please Fill The Field Correctly!',
                showConfirmButton: false,
                timer: 1400
            })
        } else {
            try {
                let response = await axios.post(adminPostLogin, body, { headers: { "Content-Type": "application/json" } });
                console.log(response.data.status)
                if (response.data.status === true) {
                    navigate('/admin/dashboard');
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate('/home');
        }
    }, [])


    const handleInputChange = (e) => {
        if (rotation === 480) { setRotation(0) }
        setRotation((prevRotation) => prevRotation + 20);
    };



    return (
        <motion.div
            className='main-div-admin container-fluid col-12'
            initial={{ opacity: 0, scale: 0.1, y: 200, borderRadius: "20%", rotate: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, borderRadius: "3%", rotate: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                duration: 0.3, ease: 'linear'
            }}
        >

            <img src="../assets/images/RoundLogo.png" alt="img" id='rotating-image' className='round-logo-login mb-2'
                style={{
                    transform: `rotate(${rotation}deg)`,
                }} onClick={() => setRotation(0)} />
            <h3 className='d-inline m-2 text-white'>Giri</h3>

            <hr className='line' />
            <h4 className='mt-4 text-white'>Admin Log In 🐱‍👤</h4>

            <form action="" onSubmit={handleAdminLogin}>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                    transition={{
                        duration: 0.3, delay: 0.1
                    }}>
                    <input type="text" id='rotation-input' className="signup-input" placeholder='Email'
                        value={email} name='email'
                        onChange={e => { handleInputChange(); setEmail(e.target.value) }} required />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                    transition={{
                        duration: 0.3, delay: 0.15
                    }}>
                    <input type="password" name="password" className="signup-input" id='pass-input rotation-input'
                        placeholder='Password'
                        value={password}
                        onChange={e => { handleInputChange(); setPassword(e.target.value) }} required />
                </motion.div><br />

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 60, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, width: 400 }}
                    transition={{
                        duration: 0.3, delay: 0.2
                    }}>
                    <button type="submit" className='submit-button mt-4'>LOG IN</button>
                </motion.div>

            </form>

            <hr className='line mt-5' />

        </motion.div>
    )
}

export default Login