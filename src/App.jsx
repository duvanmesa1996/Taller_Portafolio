 import React, { useState } from 'react';
 import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
 import { Link } from 'react-scroll';
 import { motion } from 'framer-motion';
 import { useState } from 'react';
 import { div } from 'framer-motion/client';

 const Navbar = () => {
  const [nav, setNav] = useState(false)

  const togleNav = () => {
    setNav(!nav)
  }

  const closeNav = () =>{
    setNav(false)
  }

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15
      }
    }
  }

  <div className='fixed top-0 left-0 w-full gb-opacity-70 backdrop-blur-md z-50'>
    <div clasName='max-w-[1300px] max-auto flex jutify-between text-gray-200 text-xl items-center px-12 h-20'>
      <a href="#">duvam.mesa</a>
      <ul clasName='hidden md:flex gap-12 z-10 cusor-pointer'>
      <li><Link to="skills" smooth={true} offset={50} duration={500}>about</Link></li>
      <li><Link to="portafolio" smooth={true} offset={50} duration={500}>portafolio</Link></li>
      <li><Link to="contact" smooth={true} offset={50} duration={500}>contact</Link></li>
      </ul>

      <div onClik={togleNav} className='md:hidden z-50 text-gray-200'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      <motion.div
      initial={false}
      animete {nav ? 'open' : 'closed'}
      variants={menuVariants}
      className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 '
      >
        <ul clasname>

        </ul>

      </motion.div>

    </div>
    </div>
 }

 export default Navbar