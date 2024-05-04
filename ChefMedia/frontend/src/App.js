import React from 'react'
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js"

//Imported Pages
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js'
import Home from './pages/home/Home.js'
import Profile from './pages/profile/Profile.js'


//Imported hooks
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Navbar />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>

        <br />
        <br />
        <br />
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
