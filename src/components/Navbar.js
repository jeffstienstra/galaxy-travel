import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const[menuClick, setMenuClick] = useState(false)
    const handleMenuClick = () => setMenuClick(!menuClick)

    const [color, setColor] = useState(false)
        const changeColor = () => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>GalTrav</h1></Link>
            <ul className={menuClick ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/training'>Training</Link>
                </li>
                <li>
                    <Link to='/'>Games</Link>
                </li>
            </ul>
            <div className="hamburger"
                onClick={handleMenuClick}>
                {menuClick ? (<FaTimes />) : (<FaBars />)}
            </div>
        </div>
    )
}

export default Navbar