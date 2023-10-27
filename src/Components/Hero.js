import React from 'react'
import heroImg from '../img/hero-image.png'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id='hero' className='hero relative text pb-32 bg-dark'>
        <div className='container flex flex-col-reverse justify-between pt-10 lg:flex-row items-center px-6 mx-auto space-y-0 lg:space-y-0'>
            <div className='flex text-white flex-col mt-20 space-y-12 md:w-100% lg:w-half'>
                <motion.h1
                initial={{y: '2rem', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 2, type: 'spring'}}
                className='capitalize text-5xl font-bold text-center leading-tight lg:text-left'>
                    discover <br/> most suitable <br/> property
                </motion.h1>
                <p className='text-darkGrayishBlue max-w-sm text-center mx-auto lg:mx-0 leading-5 lg:text-left'>
                    Find variety of property that suit you very easily <br/>
                    Forget all difficulties in finding a residence for you
                </p>
                <div className=' flex justify-between w-vw mx-auto lg:mx-0  md:w-search bg-white rounded-small border-3 border-darkBlue py-[8px] px-[16px]'>
                    <HiLocationMarker color='hsl(214, 57%, 28%)' size={25}/>
                    <input className='border-none outline-none text-dark' type='text'/>
                    <button className='bg-blueIsh text-white rounded-small px-4'>search</button>
                </div>

                <div className='flex justify-between w-vw md:px-32 lg:px-0 md:mx-auto lg:mx-0 lg:w-stat'>
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

            <motion.div 
            initial={{x: '7rem', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 5, type: 'spring'}}
            className='w-full rounded-topRightLeft h-full border-4 border-darkGrayishBlue'>
                <img className='w-100% h-100% rounded-topRightLeft' src={heroImg} alt='img'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero
