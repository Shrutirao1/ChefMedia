import React from 'react'
import './Signup.css'

import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'
import video5 from '../../assets/video5.mp4'
import video6 from '../../assets/video6.mp4'
import logo1 from '../../assets/logo1.png'

function Signup() {
    return (
        <>
            <div className="signupContainer">
                <video src={video6} autoPlay loop muted />
                <div className="content">
                    <div className="signupWrapper">

                        <div className="signupLeft">
                            <div className="signupBox">
                                <h3 className="chefLogo">ChefMedia</h3>
                                <span className="signupDescription">
                                    Connect with friends and the world of cooking, recipes and more.
                                </span>
                            </div>
                        </div> {/* end signupLeft */}

                        <div className="signupRight">
                            <div className="signupBox">
                                <input placeHolder="Email" className="signupInput"/>
                                <input placeHolder="Username" className="signupInput"/>
                                <input type="password" name="password" placeHolder="Password" className="signupInput"/>
                                <input type="password" name="password" placeHolder="Retype Password" className="signupInput"/>
                                <a className="alreadyUser" href="./login">Already a user? Login!</a>
                                <button className="signupButton">Sign up</button>
                            </div> {/* end signupBox */}
                        </div> {/* end signupRight */}

                    </div> {/* end signupWrapper */}
                </div> {/* end content */}
            </div> {/* end signupContainer */}
        </>
    )
}

export default Signup
