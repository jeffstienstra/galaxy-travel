import React from 'react'
import './Footer.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation className='icon'/>
                        <div>
                            <p className='address'>123 Acme St</p>
                            <p>Grand Rapids, MI</p>
                            <p>49428</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone className='icon'/> 555-867-5309</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk className='icon'/> email@snailmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <p className='title'>About the company</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="social">
                        <FaFacebook className='icon'/>
                        <FaTwitter className='icon'/>
                        <FaLinkedin className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer