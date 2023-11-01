import React from 'react'
import { ContactCards } from './ContactCard'
import contactImg from '../img/contact.jpg'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiChat, HiChatAlt} from 'react-icons/hi'

const Contact = () => {

    const cards = [
        {
            tittle: 'Call',
            icon: <FaPhoneAlt/>,
            number: '021 123 145 14',
            tag: 'call now',
        },
        {
            tittle: 'Chat',
            icon: <HiChat/>,
            number: '021 123 145 14',
            tag: 'Chat now',
        },
        {
            tittle: 'Video Call',
            icon: <HiChat/>,
            number: '021 123 145 14',
            tag: 'Video Call now',
        },
        {
            tittle: 'Message',
            icon: <HiChatAlt/>,
            number: '021 123 145 14',
            tag: 'Message now',
        },
    ]


  return (
    <section className='pb-32'>
        <div className='container flex flex-col lg:justify-between pt-10 lg:flex-row items-center px-6 mx-auto space-y-20 lg:space-y-0'>
            <div className='flex text-white flex-col space-y-4 md:w-100% lg:w-half'>   
                <span className='text-orange text-2xl font-semibold capitalize'>our contact us</span>
                <h2 className='text-blueIsh text-4xl font-bold'>Easy to contact us</h2>
                <span className='text-darkGrayishBlue pb-5'>
                    We always ready to help by providing the best service for you.
                    <br/>
                    We believe a good place to live can make your life better. 
                </span>


                <div className='grid grid-rows-2 md:grid-flow-col gap-6'>
                    {
                        cards.map((card, i) =>{
                            return (
                                <ContactCards key={i} {...card}/>
                            )
                        })
                    }
                </div>

            </div>

            <div className='w-img md:w-full rounded-topRightLeft h-full'>
                <img className='w-100% h-100% rounded-topRightLeft' src={contactImg} alt='img'/>
            </div>
        </div>
    </section>
  )
}

export default Contact
