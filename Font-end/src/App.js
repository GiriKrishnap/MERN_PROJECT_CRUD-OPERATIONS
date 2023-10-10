import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages

import Login from './pages/UserPages/loginPage'
import Signup from './pages/UserPages/SignupPage'
import HomePage from './pages/UserPages/Home';
import ProfilePage from './pages/UserPages/Profile';

//admin
import AdminDash from './components/AdminComponents/DashBoard/DashBoard'
import AdminAddUsers from './components/AdminComponents/Users/AdminAddUsers'
import UpdateUser from './components/AdminComponents/Users/UpdateUser'
import UserManagement from './components/AdminComponents/Users/UserManagement'
import AdminPage1 from './pages/AdminPages/AdminPage'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          {/* user part */}
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* admin part */}
          <Route path="/admin" element={<AdminPage1 />} />
          <Route path='admin/dashboard' element={<AdminDash />} />
          <Route path='admin/users' element={<UserManagement />} />
          <Route path='/adminAddUser' element={<AdminAddUsers />} />
          <Route path='/updateUser/:id' element={<UpdateUser />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
