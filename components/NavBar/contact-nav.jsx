/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

// const CapRoute = (props) => (
//   <li>
//     <Link href={`${props.href}`} passHref>
//     CAPABILITIES
//     </Link>
//   </li>
// );

const ContactNav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

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
      <div className=' m-auto flex justify-between items-center p-4 '>
       
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 text-black'>
            <Link href='/about'>ABOUT</Link>
          </li>
          <li className='p-4 text-black'>
            <Link href='/works'>WORK</Link>
          </li>
          {/* <li className='p-4'>
            <CapRoute href='/about##capabilities'></CapRoute>
          </li> */}
          
        </ul>
        <div className='hidden md:flex mr-20'>
        <Link href="/">
        <img className="w-full hidden md:flex  cursor-pointer" src="/Logo 1.png" alt="/" />
        </Link>
        </div>
        <ul>
        {/* <li className='p-4 hidden md:flex '>
          <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black">
          <Link href='/contact'>WORK WITH US </Link>
          </button>
          </li> */}
        </ul>

       

        {/* Mobile Button */}
        <div className='mr-72 flex md:hidden'>
          <a href="/">
        <svg width="30" height="30" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.6711 14.6371C24.2895 -1.64583 46.1974 -5.19847 62.875 8.81472C79.5527 22.7292 79.75 45.0319 66.2303 61.2162C52.6119 77.4991 30.8027 81.1504 14.0264 67.1372C-2.65127 53.2227 -2.94732 30.92 10.5724 14.6371H10.6711ZM63.0724 58.453C73.4343 46.1174 65.1448 27.9595 54.2895 18.8805C43.4343 9.80157 24.1908 4.96603 13.829 17.3016C3.46715 29.6371 11.7566 47.7951 22.6119 56.874C33.4672 65.953 52.7106 70.7885 63.0724 58.453Z" fill="black"/>
        </svg>
        </a>
        </div>
         <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} />
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
              <Link href='/about'>ABOUT</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/works'>WORK</Link>
            </li>
            {/* <button onClick={handleNav} className='py-4 px-5 mr-2 mb-2 text-2xl mt-4 font-medium text-white border border-white dark:hover:bg-black'>
              <Link href='/work'>WORK WITH US</Link>
            </button> */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ContactNav;
