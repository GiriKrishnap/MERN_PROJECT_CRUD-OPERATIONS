import React, { useEffect, useState } from 'react'
import './Profile.css'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { imageUpload, verifyUserToken } from '../../../util/constants';
import { change } from '../../../Redux/userNameReducer';
import { changeImage } from '../../../Redux/userImageReducer';
import axios from '../../../util/axios'
import Swal from 'sweetalert2';


function Profile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState('')

    const userImage = useSelector((state) => {
        return state.userImage;

    })

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');

        } else {
            const body = JSON.stringify({ token });

            axios.post(verifyUserToken, body, { headers: { "Content-Type": "application/json" } }).then((res) => {
                setName(res.data.userCheck.userName)
                setEmail(res.data.userCheck.email)
                setImage(res.data.userCheck.image)
                setPhone(res.data.userCheck.phone)
                dispatch(change(res.data.userCheck.userName))
                dispatch(changeImage(res.data.userCheck.image))

            })
        }
    }, [navigate, dispatch]);

    const addImage = async () => {
        const { value: file } = await Swal.fire({
            title: 'Select image',
            input: 'file',

            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload your profile picture'
            }
        })
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                Swal.fire({
                    title: "img",
                    imageUrl: e.target.result,
                    imageHeight: 400,
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Update',
                    denyButtonText: `Change`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        uploadImg(file)
                    } else if (result.isDenied) {
                        addImage()
                    }
                })
            }
            reader.readAsDataURL(file)
        }
        function uploadImg(file) {
            const Token2 = localStorage.getItem("token");
            let sToken = JSON.stringify(Token2)
            let formData = new FormData();
            formData.append("image", file)
            axios.post(`${imageUpload}/${sToken}`, formData).then((res) => {
                setImage(res.data.image)
                dispatch(changeImage(res.data.image))
            }).catch((err) => {
                console.log(err);
            })
        }
    }

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
                <img src={image} alt="img" className='round-logo-home mb-2' />
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
                        <img src={userImage} alt="img" className='profile-picture mb-2 mt-3' />
                    </motion.div>

                </div>

                <div className="col-md-6">

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.1
                        }}>
                        <input type="text" className="profile-input" value={name} readOnly />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.2
                        }}>
                        <input type="text" className="profile-input" value={email} readOnly />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 60, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0, width: 270 }}
                        transition={{
                            duration: 0.3, delay: 0.3
                        }}>
                        <input type="text" className="profile-input" value={phone} readOnly />
                    </motion.div>

                </div>
            </div>

            <div className="row mt-2">

                <div className="col-md-6">

                    <button type="submit" className='submit-button-home mt-4 mb-5 '
                        onClick={addImage}>
                        Update Photo
                        <i className="fa-solid fa-upload m-1"></i>
                    </button>

                </div>

                <div className="col-md-6">
                    <Link to='/home'>
                        <button type="submit" className='submit-button-home mt-4 '>Go back
                            <i className="fa-solid fa-house m-1"></i>
                        </button>
                    </Link>
                </div>

            </div>

            <hr className='line' />


        </motion.div>

    )
}

export default Profile