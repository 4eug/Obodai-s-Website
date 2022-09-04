/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

const Message = (props) => {
    return ( 
        <section className="relative grid justify-center items-center">
        <div className=" text-center md:w-full px-5 -mt-8">
        <div className="inline-block justify-center mt-8">
            <div id='#message'>
            <Image
        src="/Logo 1.png"
        alt="logo"
        width={220}
        height={50}
        priority
      />
            </div>
            </div>
        </div>
        
        <p className="mt-10 text-3xl md:text-6xl ml-4 md:ml-8 font-semibold w-3/4">
        We help transform brands,
        through design & brand thinking.
          </p>

          <div className='my-3 m-4 md:m-10 '>
              
            <span className="text-2xl md:text-2xl font-light"><Link href='/contact'>Say hello today</Link></span>

            <svg width="72" height="24" viewBox="0 0 72 24" className="inline-block pb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="black"/>
        </svg>
  
              </div>

      </section>
     );
}
 
export default Message;