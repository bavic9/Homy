import React from 'react'
import logo from '../img/logo2.png'

const Footer = () => {
  return (
    <section>
        <div className='container flex flex-col md:flex-row justify-between md:justify-around text-center mx-auto py-10 pb-20 md:pb-10 space-y-8 md:space-y-0'>
            <div className=''>
                <img className='w-logo mx-auto md:mx-0' src={logo} alt='logo'/>
                <p className='text-lg text-darkGrayishBlue mt-4 px-20 md:px-0 md:w-stat md:text-start'>Our vission is to make all people the best place to live for them</p>
            </div>

            <div className='md:text-start space-y-2'>
                <h1 className='text-blueIsh text-4xl font-bold'>Information</h1>
                <p className='text-lg text-darkGrayishBlue'>145 New York, FL 5467, USA</p>

                <div className='flex justify-center md:justify-start pt-4 gap-4 text-base text-blueIsh capitalize '>
                    <a href='#' className=''>property</a>
                    <a href='#' className=''>service</a>
                    <a href='#' className=''>product</a>
                    <a href='#' className=''>about us</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
