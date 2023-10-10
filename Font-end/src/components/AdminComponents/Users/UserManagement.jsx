import React, { useEffect, useState } from 'react'
import './style.css'
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../util/axios';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../../Redux/userNameReducer';
import { changeImage } from '../../../Redux/userImageReducer';
import { adminDeleteUser, adminGetAllUsers, adminSearchUser } from '../../../util/constants';


function UserManagement() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect((key) => {
        getUserLists();

    }, [])

    const getUserLists = () => {
        axios.get(adminGetAllUsers).then((response) => {
            setUsers(response.data.users)
        }).catch((err) => {
            console.log("oops user catch client");

        })
    }

    const userSearch = (e) => {
        let userSearch = e.target.value;

        console.log(userSearch);
        if (!userSearch) {
            getUserLists();
        } else {
            axios.get(`${adminSearchUser}/${userSearch}`).then((res) => {
                setUsers(res.data.users)
            })
        }
    }

    const deleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${adminDeleteUser}/${id}`).then((res) => {
                    getUserLists();

                })
                Swal.fire(
                    'Deleted!',
                    'User has been deleted.',
                    'success'
                )
            }
        })
    }


    return (
        <motion.div
            className='main-div-user container-fluid col-12'
            initial={{ opacity: 0, scale: 0.2, y: 200, borderRadius: "20%", rotate: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, borderRadius: "3%", rotate: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                duration: 0.3, ease: 'linear'
            }}>

            <div className="col-12">
                <img src={"../assets/images/RoundLogo.png"} alt="img" id='rotating-image' className='round-logo-login mb-1'
                />
                <h4 className='d-inline m-2 text-white'>Users Page</h4>

                <input class="form-control m-2 w-25 d-inline" onChange={userSearch} name="query"
                    type="search" placeholder="Search" aria-label="Search" />

            </div>

            <hr className='line' />

            <motion.h1
                initial={{ opacity: 0, scale: 0, y: 60, blur: 20, filter: "blur(5px)", }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", }}
                transition={{
                    duration: 0.3, delay: 0.2, ease: 'linear',
                }}
                className='mt-1 mb-3 text-white'>Here The List, Admin 🐱‍👤
                <button className='btn btn-primary'
                    onClick={() => navigate('/adminAddUser')}> add User
                </button>
            </motion.h1>



            <div className="user-table">

                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((obj, index) =>
                            <motion.tr
                                initial={{ y: 40, scale: 0, opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 0.02 } }}
                                viewport={{ once: true, amount: 1.0 }}
                            >

                                <th scope="row">{index + 1}</th>
                                <td>{obj.userName}</td>
                                <td>{obj.email}</td>
                                <td>{obj.phone}</td>
                                <td>
                                    <button className='btn btn-secondary p-2 m-2'
                                        onClick={() => navigate(`/updateUser/${obj._id}`)}>
                                        Edit
                                    </button>

                                    <button className='btn btn-danger p-2 m-2'
                                        onClick={() => deleteUser(obj._id)}>
                                        Delete
                                    </button>
                                </td>

                            </motion.tr>
                        )}


                    </tbody>
                </table>
            </div>


            <hr className='line mt-1' />


            <Link to='/admin/dashboard'>
                <button type="submit" className='submit-button-home mt-1'>Go Back
                    <i className="fa-solid fa-home m-1"></i>
                </button>
            </Link>

        </motion.div >
    )
}

export default UserManagement