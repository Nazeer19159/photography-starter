import React from 'react';

// importing components
import Socials from '../components/Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from '../components/MobileNav'

import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center' >
    <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between">
      <Link to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt="" />
      </Link>
      {/*Desktop navbar */}
      <nav  className='hidden lg:flex space-x-12 font-semibold'>
        <Link to={'/'} className='text-[#696A6D] hover:text-primary transition'>Home</Link>
        <Link to={'/porfolio'} className='text-[#696A6D] hover:text-primary transition'>Portfolio</Link>
        <Link to={'/about'} className='text-[#696A6D] hover:text-primary transition'>About</Link>
        <Link to={'/contact'} className='text-[#696A6D] hover:text-primary transition'>Contact</Link>
      </nav>
    </div>
      <Socials/>
      <MobileNav/>
  </header>
};

export default Header;
