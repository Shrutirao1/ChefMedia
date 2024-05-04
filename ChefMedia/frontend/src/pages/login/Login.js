import React from 'react'
import video1 from '../../assets/video3.mp4'

import './login.css'

function Login() {
  return (
   <>
    <div className="loginContainer">

      <video src={video1} autoPlay loop muted />
      <h3 className="cheflogo">ChefMedia</h3>


      <div className="usernameContainer">
        <label className="textFeild">Username:</label>
        <input type="text" />
      </div>

      <div className="passwordContainer">
        <label className="textFeild">Password:</label>
        <input type="text" />
      </div>



      <a className="notUser" href="./signup">Not a user? Register!</a>

      <button className="loginButton" type="button">
        LOGIN
      </button>



    

    </div>

  
   </>
  )
}

export default Login
