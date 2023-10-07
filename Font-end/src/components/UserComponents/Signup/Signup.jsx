import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../util/axios';
import Swal from 'sweetalert2';
import { signupPost } from '../../../util/constants';


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

        <div className="main-div container-fluid col-12">
            <div className="col-12">
                <img src="../assets/images/RoundLogo.png" alt="img" id='rotating-image' className='round-logo-login mb-2'
                    style={{
                        transform: `rotate(${rotation}deg)`,
                    }} onClick={() => setRotation(0)} />
                <h3 className='d-inline m-2 text-white'>Giri</h3>
            </div>
            <hr className='line' />
            <h4 className='mt-4 text-white'>SIGN UP</h4>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" id='rotation-input' className="signup-input" placeholder='Full Name'
                    autoComplete='off'
                    value={userName}
                    onChange={e => { handleInputChange(); setUserName(e.target.value) }}
                /> <br />
                <input type="email" id='rotation-input' className="signup-input" placeholder='Email'
                    value={email}
                    onChange={e => { handleInputChange(); setEmail(e.target.value) }} />
                <input type="number" id='rotation-input' className="signup-input" placeholder='Phone'
                    value={phone}
                    onChange={e => { handleInputChange(); setPhone(e.target.value) }} />
                <input type="password" name="" className="signup-input" id='pass-input rotation-input' placeholder='Password'
                    value={password}
                    onChange={e => { handleInputChange(); setPassword(e.target.value) }} /><br />
                <button type="submit" className='submit-button mb-3 mt-4'>SIGN UP</button> <br />
                <Link to='/'> <p className='login-aTag d-inline'>You Have Account?</p> </Link>
            </form>

            <hr className='line mt-1' />
        </div>
    )
}

export default Signup;