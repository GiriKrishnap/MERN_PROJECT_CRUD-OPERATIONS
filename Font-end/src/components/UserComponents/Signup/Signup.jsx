import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../util/axios';
import Swal from 'sweetalert2';
import { signupPost } from '../../../util/constants';
import { motion } from "framer-motion"

function Signup() {

    const navigate = useNavigate();

    /////useState
    const [rotation, setRotation] = useState(0);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    ////////
    const handleInputChange = (e) => {
        if (rotation === 480) { setRotation(0) }
        setRotation((prevRotation) => prevRotation + 20);
    };

    //// submit
    const handleSubmit = async (e) => {
        const body = JSON.stringify({
            userName,
            email,
            phone,
            password
        })
        console.log(body)
        e.preventDefault();

        if (userName === '' || email === '' || phone.length < 10 || password === '') {

            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Fill The Field Correctly! 🥺',
                showConfirmButton: false,
                timer: 1500
            })

        } else {

            try {
                let response = await axios.post(signupPost, body, { headers: { "Content-Type": "application/json" } });

                if (response.data.status === true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => navigate('/'));
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1400
                    })

                }
            } catch (error) {
                console.log(`font-end : SignUp  -  ${error.message}`)
            }
        }
    }

    /////////////////
    return (

        <motion.div
            className='main-div container-fluid col-12'
            initial={{ opacity: 0, scale: 0.2, y: 200, borderRadius: "20%", rotate: -20 }}
            animate={{ opacity: 1, scale: 0.95, y: 0, borderRadius: "3%", rotate: 0 }}
            whileHover={{ scale: 1 }}
            transition={{
                duration: 0.3,
            }}>

            <div className="col-12">
                <img src="../assets/images/RoundLogo.png" alt="img" id='rotating-image' className='round-logo-login mb-2'
                    style={{
                        transform: `rotate(${rotation}deg)`,
                    }} onClick={() => setRotation(0)} />
                <h3 className='d-inline m-2 text-white'>Giri</h3>
            </div>
            <hr className='line' />
            <h4 className='mt-3 text-white'>SIGN UP</h4>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 20, rotate: -20, width: 530 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, }}
                    transition={{
                        duration: 0.3, delay: 0.1
                    }}>
                    <input type="text" id='rotation-input' className="signup-input" placeholder='First Name'
                        autoComplete='off' required
                        value={userName} name='username'
                        onChange={e => { handleInputChange(); setUserName(e.target.value) }}
                    /></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, }}
                    transition={{
                        duration: 0.3, delay: 0.2
                    }}>
                    <input type="email" id='rotation-input' className="signup-input" placeholder='Email'
                        value={email} name='email' required
                        onChange={e => { handleInputChange(); setEmail(e.target.value) }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, }}
                    transition={{
                        duration: 0.3, delay: 0.3, ease: 'linear'
                    }}>
                    <input type="number" id='rotation-input' className="signup-input" placeholder='Phone'
                        value={phone} name='phone' required
                        onChange={e => { handleInputChange(); setPhone(e.target.value) }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 50, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, }}
                    transition={{
                        duration: 0.3, delay: 0.4
                    }}>
                    <input type="password" name="password" className="signup-input" id='pass-input rotation-input' placeholder='Password'
                        value={password} required
                        onChange={e => { handleInputChange(); setPassword(e.target.value) }} /><br />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 30, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, }}
                    transition={{
                        duration: 0.2, delay: 0.5
                    }}>

                    <button type="submit" className='submit-button mb-3 mt-4'>SIGN UP</button> <br />
                    <Link to='/'> <p className='login-aTag d-inline'>You Have Account?</p> </Link>

                </motion.div>
            </form>

            <hr className='line mt-3' />

        </motion.div>
    )
}

export default Signup;