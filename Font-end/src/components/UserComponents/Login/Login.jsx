import React, { useState } from 'react'
import './Login.css'


function Login() {

    const [rotation, setRotation] = useState(0);


    const handleInputChange = (e) => {
        if (rotation === 480) { setRotation(0) }
        setRotation((prevRotation) => prevRotation + 20);
    };

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
            <h4 className='mt-4 text-white'>LOG IN</h4>
            <form action="">
                <input type="text" id='rotation-input' className="signup-input" placeholder='Email'
                    onChange={handleInputChange} />
                <input type="password" name="" className="signup-input" id='pass-input rotation-input' placeholder='Password'
                    onChange={handleInputChange} /><br />
                <button type="submit" className='submit-button mt-4'>LOG IN</button>
                <a href="/signup" className='login-aTag mt-3'>First Time Here?</a>
            </form>
            <hr className='line mt-5' />
        </div>
    )
}

export default Login