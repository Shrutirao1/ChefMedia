import React from 'react'
import './profile.css'
<<<<<<< HEAD
=======

import gordon from '../../assets/gordon.png'
import Post from '../../components/post/Post.js'
>>>>>>> 5c05368d2a3c936093255290a3cf4b656d626f13

import gordon from "../../assets/gordon.png"
import Post from '../../components/post/Post.js'
function Profile() {
    return (
<<<<<<< HEAD
        <div className="profileContainer">

            <div className='profileLeft'>

                <div className="profileContent">

                

                    <h2 className="Username">Gordon Ramsey</h2>

                    <img className="profilePic" src={gordon} alt='' />

                    <div className="bioBox">

                        <ul className="bioList">

                            <li className="bioEntry">Name:</li>
                            <li className="bioEntry">Age:</li>
                            <li className="bioEntry">Bio:</li>

                        </ul>
        
=======
        <div className = "profileContainer">

            <div className = "profileLeft">

                <div className = "profileContent">



                    <h2 className = "username">Gordon Ramsay</h2>
                    
                    <img className = "profilePic" src = {gordon} alt = ""></img>

                    <div className = "bioBox">
                        <ul className = "bioList">
                            <li className = "bioEntry">Name: </li>
                            <li className = "bioEntry">Age: </li>
                            <li className = "bioEntry">Bio: </li>
                        </ul>
>>>>>>> 5c05368d2a3c936093255290a3cf4b656d626f13
                    </div>

                </div>

<<<<<<< HEAD





            </div>

            <div className="profileRight"> 
            <post />
            </div>
           
=======
            </div>

            <div className = "profileRight">
                
            </div>

>>>>>>> 5c05368d2a3c936093255290a3cf4b656d626f13
        </div>
    )
}

export default Profile
