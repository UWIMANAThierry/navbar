import React from "react";
import {FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="content">
                    <div className="col-1">
                        <h1>Data to enrich your</h1>
                        <h1><span className="primary-color">online business</span></h1>
                        <p>So perhaps, you've generated some fancy text, 
                        and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? 
                        Are you copying and pasting an actual font?</p>
                    </div>
                    <div className="used-by">
                        <p>USED BY</p>
                        <div className="icons">
                            <span><FaDatabase />Thierry</span>
                            <span><FaAsterisk />Software Dev</span>
                            <span><FaAccusoft />SOS</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="form-layout">
                        <div className="form-container">
                            <p className="sign-in-txt">Sign In With</p>
                            <div className="social-login">
                                <span><FaFacebook size={20} /></span>
                                <span><FaTwitter size={20} /></span>
                                <span><FaGithub size={20} /></span>
                            </div>
                            <div className="divider">
                                <p><span>Or</span></p>
                            </div>
                            <form action="">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button>Create Your Account</button>
                            </form>
                        </div>
                        <div className="form-footer">
                            <p>
                                By Signing Up, You Agree to Our
                                <span className="primary-color">Terms, Data Policy</span>
                                and <span className="primary-color">Cookies Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Hero