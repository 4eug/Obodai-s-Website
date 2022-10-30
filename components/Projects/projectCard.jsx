/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/future/image'

function ProjectCard(props) {
    return ( 
    <section classNameName="mt-20 ">
    <div className="relative">
      <img
      src={props.src}
      className="w-[450px] h-[610px] sm:w-[400px] md:w-[1440px] md:h-[664px] 2xl:w-screen object-cover"
      // width="1440"
      // height="664"
      priority
      />
        {/* <img src={props.src} alt='' className="" width='100%' height='10%' />  */}
        <div className="absolute bottom-0 left-0 md:p-10 p-6">
        <h2 className="text-[35px] md:text-[45px] font-semibold 5 text-white">{props.title}</h2>
        <p className="text-[16px] md:text-[24px] leading-4 text-white mt-1">{props.description}</p>
           <a href={props.url} className="mt-2">
            <svg width="60" height="24" viewBox="0 0 72 24" className="mt-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="white"/>
            </svg>
            </a>
          </div>
            
    </div>
</section>
     );
}
 
export default ProjectCard;