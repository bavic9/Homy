import React from 'react'
import logo1 from '../img/prologis.png'
import logo2 from '../img/tower.png'
import logo3 from '../img/equinix.png'
import logo4 from '../img/realty.png'

const Companies = () => {
  return (
    <section className=''>
        <div className='md:flex justify-around mx-auto w-stat py-8 logoImg gap-8'>
            <img src={logo1} alt=''/>
            <img src={logo2} alt=''/>
            <img src={logo3} alt=''/>
            <img src={logo4} alt=''/>
        </div>
    </section>
  )
}

export default Companies
