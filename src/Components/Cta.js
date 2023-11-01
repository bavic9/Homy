import React from 'react'

const Cta = () => {
  return (
    <section>
      <div className=' bg-blueIsh mb-10 text-center text-white py-10 flex flex-col'>
          <h1 className='text-4xl font-semibold pb-4'>Get started with Homzy</h1>
          <p className='text-lg text-darkGrayishBlue px-8'>Subscribe and find supper attractive price quotes from us</p>
          <p className='text-lg text-darkGrayishBlue'>Find your residence soon</p>
          <button className='my-12'>
              <a href='#' className='py-4 px-8 text-white border rounded-md text-xl hover:bg-blueIshLight hover:text-blueIsh transition ease-in-out delay-70'>Get Started</a>
          </button>
      </div>
    </section>
  )
}

export default Cta
