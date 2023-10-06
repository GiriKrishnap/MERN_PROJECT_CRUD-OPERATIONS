import React, { useState } from 'react'
import './Profile.css'


function Profile() {


    return (
        <div className="main-div-home container-fluid col-12">
            <div className="col-12 mb-2">
                <img src="../assets/images/RoundLogo.png" alt="img" className='round-logo-login mb-2'
                />
                <h4 className='d-inline m-2 text-white'>Profile Page</h4>
            </div>
            <div className="row">
                <hr className='line' />

                <div className="col-md-6">
                    <img src="../assets/images/RoundLogo.png" alt="img" className='profile-picture mb-2 mt-3' />

                </div>

                <div className="col-md-6">
                    <input type="text" className="profile-input" placeholder='Giri Krishna' readOnly /><br />
                    <input type="text" className="profile-input" placeholder='Girikrishna.p7@gmail.com' readOnly />
                    <input type="text" className="profile-input" placeholder='8392839234' readOnly />

                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-6">
                    <button type="submit" className='submit-button-home mt-4 mb-5 '>Update Photo <i class="fa-solid fa-upload"></i></button>
                </div>

                <div className="col-md-6">
                    <button type="submit" className='submit-button-home mt-4 '>Go back <i class="fa-solid fa-house"></i></button>
                </div>
            </div>

            <hr className='line' />


        </div>
    )
}

export default Profile