import React from 'react'
import {Link} from 'react-router-dom';
import './Card.css'

const Card = (
    {
        title = '',
        cost = '',
        descriptions = [], // Array of strings
        linkPath = '/contact',
        btnText = ''
    }
) => {

    return (
        <div className="card">
            <h3>- {title} -</h3>
            <span className="bar"></span>
            <p className="cost">{cost}</p>
            {descriptions.map((item, i) => {
                return (
                    <p key={i} className='feature'>- {item} -</p>
                )
            })}
            <Link to={linkPath} className='btn'>{btnText}</Link>
        </div>
    )
}

export default Card;