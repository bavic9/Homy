import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown, MdCancel, MdAnalytics } from 'react-icons/md'
import {HiShieldCheck } from 'react-icons/hi'
import valueimg from '../img/value.png'
import { ValueData, ValueDetail } from './ValueData';


const Values = () => {


    const value = [
        {
            icon: <HiShieldCheck/>,
            heading: "Best interest rates on the market",
            dropDown: <MdOutlineArrowDropDown size={20}/>,
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur atque odit at, corporis quo dolor.",
        },
        {
            icon: <MdCancel/>,
            heading: "Prevent unstable prices",
            dropDown: <MdOutlineArrowDropDown/>,
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur atque odit at, corporis quo dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur atque odit at, corporis quo dolor.",
        },
        {
            icon: <MdAnalytics/>,
            heading: "Best price on the market",
            dropDown: <MdOutlineArrowDropDown/>,
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur atque odit at, corporis quo dolor.",
        },
    ]



  return (
    <section className='pb-10'>
      <div className='container flex flex-col-reverse justify-between pt-10 lg:flex-row items-center px-6 py-20 mx-auto space-y-0 md:space-y-0'>
        <div className='w-full mt-20 lg:mt-0 rounded-topRightLeft h-full border-4 border-darkGrayishBlue'>
          <img className='w-100% h-100% rounded-topRightLeft' src={valueimg} alt=''/>
        </div>

        <div className='lg:w-half'>
          <span className='text-orange text-2xl font-semibold capitalize'>our value</span>
          <h2 className='text-blueIsh text-4xl font-bold py-2 '>value we give to you</h2>
          <span className='text-darkGrayishBlue'>
            We always ready to help by providing the best service for you.
            <br/>
            We believe a good place to live can make your life better. 
          </span>


          <Accordion
          className='mt-10 border-none'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
              value.map ((data, index) => {
                return (
                    <AccordionItem className='border-none p-8 rounded-md overflow-hidden mt-5 shadow-md hover:shadow-md shadow-blueIsh/50' key={index} uuid={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton className=''>
                          <ValueData key={index} {...data}/>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <ValueDetail key={index} {...data}/>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Values
