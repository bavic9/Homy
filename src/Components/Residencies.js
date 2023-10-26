import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import { ResCard } from './ResCard'
import r1 from '../img/r1.png'
import r2 from '../img/r2.png'
import r3 from '../img/r3.png'
import 'swiper/css';


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
    <section className='pb-10'>
        <div className='py-10 relative'>
            <div className='mb-16 w-card mx-auto md:pl-10 text-center md:text-start capitalize'>
                <span className=' text-4xl md:text-5xl text-orange'>best choices</span> <br/>
                <span className='leading-snug font-bold text-4xl md:text-5xl text-blueIsh '>popular Residencies</span>
            </div>
            
            
            <Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                480: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                979: {
                    slidesPerView: 4,
                },
                1440: {
                    slidesPerView: 4,
                },
            }}
            className='h-full w-card'>
                {data.map((data, index) => {
                        return (
                            <SwiperSlide className=''>
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








// const SliderButtons =() => {


//     const swiper = useSwiper();


//     return (
//         <div className='text-6xl font-bold gap-4 bg-red '>
//             <button onClick={() => swiper.slidePrev()}>&lt;</button>
//             <button onClick={() => swiper.slideNext()}>&gt;</button>
//         </div>
//     )
// }
