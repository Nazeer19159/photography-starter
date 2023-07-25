import React from 'react';

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
// Link
import { Link } from 'react-router-dom';
// Motion
import { motion } from 'framer-motion';

const MobileNav = () => {
  return <nav className='text-3xl cursor-pointer lg:hidden'>
    <CgMenuRight />

    <div className="absolute right-0 top-0 w-full max-w-xs z-20 bg-white h-screen">
      {/* Close icon */}
      <div className='absolute left-4 top-14 text-4xl'>
        <IoMdClose/>
      </div>

{/* Mobile Mene */}
      <ul className='h-full flex  flex-col items-center justify-center text-[#696A6D] hover:text-primary transition font-bold font-primary text-3xl gap-y-12'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/portfolio'}>Portfolio</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  </nav>;
};

export default MobileNav;
