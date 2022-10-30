import React from 'react'
import HeroImage from '../components/HeroImage'
import ContactForm from '../components/ContactForm'

function Contact() {
    return (
        <div>
            <HeroImage heading='CONTACT.' text='Contact GalTrav'/>
            <ContactForm />
        </div>
    )
}

export default Contact