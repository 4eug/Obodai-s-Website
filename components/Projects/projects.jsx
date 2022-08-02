/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Projects = () => {
    return ( 
    //         <section classNameName="h-52 xsm:h-72 sm:h-80 md:h-96 lg:h-screen relative mb-20 mt-8 md:mt-20">
    //             <h1 classNameName="p-5 text-red-900 text-7xl z-[2] mt-[-0rem]">Projects</h1>
    //             <div>
    //             <Image layout='fill' objectFit='cover' src='/Mylo & Eddie.png' alt='' classNameName="" />
    //             </div>
    //   </section>
    <section classNameName="mt-20 ">
    <div className="relative">
        <img src="/Mylo & Eddie.png" alt='' className="" width='100%' height='10%' /> 
        <h5 className="absolute text-2xl md:text-3xl text-white bottom-7 left-1 -translate-x-1 mb-10 pl-4 md:pl-10 mt-10">
            KUDFUL
          </h5>
          <h5 className="absolute text-lg md:text-xl text-white bottom-0 left-1 mb-10 pl-4 md:pl-10 mt-6">
          A cup full of coffee.
          </h5>
          
        {/* <h3 className="absolute text-3xl text-amber-400 bottom-4 left-1 -translate-x-1">Bottom Center</h3> */}
    </div>
</section>
     );
}
 
export default Projects;