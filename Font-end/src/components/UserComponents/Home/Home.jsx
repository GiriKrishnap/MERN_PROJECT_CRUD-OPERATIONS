import React, { useState } from 'react'

import './Home.css'


function Login() {

    

    return (
        <div className="main-div-home container-fluid col-12">
            <div className="col-12">
                <img src="../assets/images/RoundLogo.png" alt="img" id='rotating-image' className='round-logo-login mb-2'
                />
                <h4 className='d-inline m-2 text-white'>Home Page</h4>
            </div>
            <hr className='line' />
            <h1 className='mt-4 text-white'>HELLO GIRI KRISHNA</h1>



            <button type="submit" className='submit-button-home mt-4'>Go To Profile <i class="fa-solid fa-user m-1"></i></button>


            <hr className='line mt-5' />
            <button type="submit" className='logout-button-home mt-4'>Logout<i class="fa-solid m-1 fa-square-arrow-up-right"></i></button>
        </div>
    )
}

export default Login