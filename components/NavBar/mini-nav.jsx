/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Mininav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [closeColor, setCloseColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className=' m-auto flex justify-between p-4 items-center text-white'>
       
        <ul>
          <li></li>
        </ul>

        <ul style={{ color: `${textColor}` }} className=' sm:flex'>
        <img className="w-full hidden md:flex pl-32" src="/Logo 1.png" alt="/" />
          
        </ul>

        <ul>
        <li className='p-4 hidden md:flex '>
          <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black"> START A PROJECT </button>
          </li>
        </ul>
       

        {/* Mobile Button */}
         <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${closeColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        > 
          <ul>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/'>ABOUT</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/#gallery'>WORK</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/work'>CAPABILITIES</Link>
            </li>
            <button onClick={handleNav} className='py-4 px-5 mr-2 mb-2 text-2xl mt-4 font-medium text-white border border-white dark:hover:bg-black'>
              <Link href='/work'>START A PROJECT </Link>
            </button>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mininav;
