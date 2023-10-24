import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
  return (
    <section className='text-white bg-dark h-32'>
        <div className='flex item-center justify-around flex-wrap gap-10 py-10 text-darkGrayishBlue'>

          <img className='w-logo' src={logo} about='logo'/>
          {/* <h2 className='text-4xl font-medium'>LOGO</h2> */}

          <div className='flex item-center pt-2 space-x-10 text-center text-xl'>
              <a className='hover:text-veryLightGray' href='#'>Residencies</a>
              <a className='hover:text-veryLightGray' href='#'>Our Value</a>
              <a className='hover:text-veryLightGray' href='#'>Contact Us</a>
              <a className='hover:text-veryLightGray' href='#'>Get Started</a>
              <button className='bg-blueIsh text-white py-3 px-10 -mt-3 baseline rounded-small transition ease-in-out delay-100 hover:scale-110'>
                  <a href='#'>Contact</a>
              </button>
          </div>
        </div>
    </section>
  )
}

export default Header
