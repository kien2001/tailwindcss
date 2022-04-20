import React, {useState, useEffect} from 'react'
import Logo from '../img/logo.svg'

const Navigation = () => {
  const [isShow, setIsShow] = useState(false)
  useEffect(()=>{
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  }, [isShow])
  return (
    <nav className='relative container mx-auto p-3 '>
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        {/* Menu items */}
        <ul className='hidden space-x-6 md:flex'>
          <li className='hover:text-darkGrayishBlue'><a href="#">Pricing</a></li>
          <li className='hover:text-darkGrayishBlue'><a href="#">Product</a></li>
          <li className='hover:text-darkGrayishBlue'><a href="#">About us</a></li>
          <li className='hover:text-darkGrayishBlue'><a href="#">Careers</a></li>
          <li className='hover:text-darkGrayishBlue'><a href="#">Community</a></li>
        </ul>
        {/* Button */}
        <a href="#" className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full self-baseline hover:bg-brightRedLight md:block'>Get Started</a>
        {/* Hamburger icon */}
        <button id="menu-btn" className="block hamburger md:hidden focus:outline-none" onClick={()=>setIsShow(!isShow)}>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
          <ul id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <li className='hover:text-darkGrayishBlue'><a href="#">Pricing</a></li>
            <li className='hover:text-darkGrayishBlue'><a href="#">Product</a></li>
            <li className='hover:text-darkGrayishBlue'><a href="#">About us</a></li>
            <li className='hover:text-darkGrayishBlue'><a href="#">Careers</a></li>
            <li className='hover:text-darkGrayishBlue'><a href="#">Community</a></li>
          </ul>
      
      </div>
    </nav>
  )
}

export default Navigation