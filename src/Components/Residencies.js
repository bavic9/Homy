import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { ResCard } from './ResCard'
import r1 from '../img/r1.png'
import r2 from '../img/r2.png'
import r3 from '../img/r3.png'


const Residencies = () => {

    const data = [
        {
            nam: "Aliva Priva Jardin",
            price: "47,043",
            detail: "Jakarta Garden City Street, Cakung, Paulo",
            imageUrl: r1,
        },
        {
            nam: "Asatti Garden City",
            price: "66,353",
            detail: "Pahlawan Street XVII No.215, Cinangka",
            imageUrl: r2,
        },
    
        {
            nam: "Citralan Puri Serang",
            price: "35,853",
            detail: "Ruko Puri Indah Residence Block A7, Lingkar Street",
            imageUrl: r3,
        },
    
        {
            nam: "Aliva Priva Jardin",
            price: "47,043",
            detail: "Jakarta Garden City Street, Cakung, Paulo",
            imageUrl: r1,
        },
    
        {
            nam: "Asatti Garden City",
            price: "66,353",
            detail: "Pahlawan Street XVII No.215, Cinangka",
            imageUrl: r2,
        },
    
        {
            nam: "Citralan Puri Serang",
            price: "35,853",
            detail: "Ruko Puri Indah Residence Block A7, Lingkar Street",
            imageUrl: r3,
        }
    ]
    

  return (
    <section className=''>
        <div className='py-10 px-20'>
            <div className='mb-16 capitalize'>
                <span className=' text-5xl text-orange'>best choices</span> <br/>
                <span className='leading-snug font-bold text-6xl text-blueIsh '>popular Residencies</span>
            </div>

            <Swiper>
                {data.map((data, index) => {
                        return (
                            <SwiperSlide key={index} {...data}>
                                <ResCard key={index} {...data}/>
                            </SwiperSlide>
                        )
                })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies
