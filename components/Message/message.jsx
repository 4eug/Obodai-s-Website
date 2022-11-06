/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';


const Message = (props) => {
    return ( 
        <section className="relative grid justify-center items-center">
        <div className=" text-center md:w-full px-5 -mt-8">
        <div className="inline-block justify-center mt-8">
            <div id='#message'>
          
            </div>
            </div>
        </div>
        
        <p className="mt-10 text-[30px] md:text-[60px] leading-normal md:leading-[78px] ml-4 md:ml-8 font-medium w-3/4">
        We’re a boutique brand design 
        firm creating noteworthy brands
        for future-facing organizations.
          </p>

          <div className='my-3 m-4 md:m-10 '>
              
            <span className="text-[25px] md:text-[45px] font-normal"><Link href='/contact'>Say hello today</Link></span>
            <svg width="62" height="24" viewBox="0 0 72 24" className="inline-block ml-6 mb-4 animate-bounce-right" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="black"/>
                 </svg>
  
              </div>

      </section>
     );
}
 
export default Message;