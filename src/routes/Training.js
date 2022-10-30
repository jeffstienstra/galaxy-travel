import React from 'react'
import HeroImage from '../components/HeroImage';
import TrainingComp from '../components/Training';

const Training = () => {
    return (
        <div>
            <HeroImage heading='TRAINING.' text='Pre-Flight & in-Flight Training.' />
            <TrainingComp />
        </div>
    )
}

export default Training;