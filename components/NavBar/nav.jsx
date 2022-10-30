import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const CapRoute = (props) => (
//   <li>
//     <Link href={`${props.href}`} passHref>
//     CAPABILITIES
//     </Link>
//   </li>
// );

const Navbar = () => {
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
      <div className=' m-auto flex justify-between items-center p-4 text-white'>
       
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/about'>ABOUT</Link>
          </li>
          <li className='p-4'>
            <Link href='/works'>WORK</Link>
          </li>
          {/* <li className='p-4'>
            <CapRoute href='/about##capabilities'></CapRoute>
          </li> */}
          
        </ul>

        <ul>
        <li className='p-4 hidden md:flex '>
          <button style={{ color: `${textColor}` }} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white border-[1px] border-{`${textColor}`} dark:hover:bg-black">
          <Link href='/contact'>WORK WITH US </Link>
          </button>
          </li>
        </ul>

       

        {/* Mobile Button */}
         <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
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
              <Link href='/about'>ABOUT</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/works'>WORK</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
              <Link href='/'>CAPABILITIES</Link>
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

export default Navbar;
