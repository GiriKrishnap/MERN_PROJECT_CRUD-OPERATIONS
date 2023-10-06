import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//pages

import Login from './pages/UserPages/loginPage'
import Signup from './pages/UserPages/SignupPage'
import HomePage from './pages/UserPages/Home';
import ProfilePage from './pages/UserPages/Profile';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
