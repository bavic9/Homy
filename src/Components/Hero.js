import React from 'react'
import heroImg from '../img/hero-image.png'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section id='hero' className='hero relative text pb-32 bg-dark'>
        <div className='container flex flex-col-reverse justify-between pt-10 md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0'>
            <div className='flex text-white flex-col mt-20 space-y-12 md:w-half'>
                <h1 className='capitalize text-5xl font-bold text-center leading-tight md:text-left'>
                    discover <br/> most suitable <br/> property
                </h1>
                <p className='text-darkGrayishBlue max-w-sm text-center mx-auto md:mx-0 leading-5 md:text-left'>
                    Find variety of property that suit you very easily <br/>
                    Forget all difficulties in finding a residence for you
                </p>
                <div className=' flex justify-between w-vw mx-auto md:mx-0  md:w-search bg-white rounded-small border-3 border-darkBlue py-[8px] px-[16px]'>
                    <HiLocationMarker color='hsl(214, 57%, 28%)' size={25}/>
                    <input className='border-none outline-none text-dark' type='text'/>
                    <button className='bg-blueIsh text-white rounded-small px-4'>search</button>
                </div>

                <div className='flex justify-between w-vw md:w-stat'>
                    <div className='flex flex-col '>
                        <span className='text-center text-3xl '>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span className='text-orange pl-2 font-bold'>+</span>
                        </span>
                        <span className='capitalize pt-1'>premium product</span>
                    </div>
                    
                    <div className='flex flex-col '>
                        <span className='text-center text-3xl '>
                            <CountUp start={1500} end={2000} duration={4}/>
                            <span className='text-orange pl-2 font-bold'>+</span>
                        </span>
                        <span className='capitalize pt-1'>happy customer</span>
                    </div>
                    
                    <div className='flex flex-col '>
                        <span className='text-center text-3xl '>
                            <CountUp start={0} end={28}/>
                            <span className='text-orange pl-2 font-bold'>+</span>
                        </span>
                        <span className='capitalize pt-1'>awards winning</span>
                    </div>
                </div>
            </div>
            <div className='w-full rounded-topRightLeft h-full border-4 border-darkGrayishBlue'>
                <img className='w-100% h-100% rounded-topRightLeft' src={heroImg} alt='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
