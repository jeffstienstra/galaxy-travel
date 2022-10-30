import React from 'react'
import Card from './Card';
import './Pricing.css'

const packages = {
    basic: ['3 Days', 'Lunar Views', 'Group Tours', 'Shared Quarters'],
    suite: ['5 Days', 'Deep Space Views', 'Meals on Lunar Pod', 'Private Quarters'],
    executive: ['7 Days', 'Intergallactic Views', 'Guided Space Walk', 'Secluded Lunar Lodge'],
}

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className="card-container">
                <Card
                    title={'Basic'}
                    cost={'1 BTC'}
                    descriptions={packages.basic}
                    linkPath={'/contact'}
                    btnText={'Basic'}
                />
                <Card
                    title={'Suite'}
                    cost={'3 BTC'}
                    descriptions={packages.suite}
                    linkPath={'/contact'}
                    btnText={'Suite'}
                />
                <Card
                    title={'Executive'}
                    cost={'9 BTC'}
                    descriptions={packages.executive}
                    linkPath={'/contact'}
                    btnText={'Executive'}
                />
            </div>
        </div>
    )
}

export default Pricing;