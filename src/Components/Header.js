import React, {useState} from 'react'
import logo from '../img/logo.png'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened)=>{
    if (document.documentElement.clientWidth <= 800)
    {
      return { right: !menuOpened && '-100%'}
    }
  }

  return (
    <section className='text-white bg-dark h-32'>
        <div className='flex item-center px-5 md:px-0 justify-between md:justify-around flex-wrap gap-10 py-10 text-darkGrayishBlue relative'>

          <img className='w-logo' src={logo} about='logo'/>


          <OutsideClickHandler
          onOutsideClick={()=> {
            setMenuOpened(false)
          }}
          >
            <div className='md:flex item-center pt-2 md:space-x-10 space-y-10 md:space-y-0 text-center text-xl menu'
            style={getMenuStyles(menuOpened)}
            >
                <a className='hover:text-blueIsh md:hover:text-veryLightGray' href='#'>Residencies</a>
                <a className='hover:text-blueIsh md:hover:text-veryLightGray' href='#'>Our Value</a>
                <a className='hover:text-blueIsh md:hover:text-veryLightGray' href='#'>Contact Us</a>
                <a className='hover:text-blueIsh md:hover:text-veryLightGray' href='#'>Get Started</a>
                <button className='bg-blueIsh text-white py-3 px-10 -mt-3 baseline rounded-small transition ease-in-out delay-100 hover:scale-110'>
                    <a href='#'>Contact</a>
                </button>
            </div>
          </OutsideClickHandler>


          <div className='md:hidden' onClick={() => setMenuOpened ((prev)=> !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
    </section>
  )
}

export default Header
