import React from 'react'
import './Training.css'
import {Link} from 'react-router-dom'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

function Training() {
    return (
        <div className='training'>
            <div className="left">
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling to space.</p>
                <Link to='/contact'><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src={Moon} alt="moon" className="img img1" />
                    </div>
                    <div className="image-stack bottom">
                        <img src={Pod} alt="pod" className="img img2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training