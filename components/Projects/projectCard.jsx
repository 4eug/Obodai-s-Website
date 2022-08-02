/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function ProjectCard(props) {
    return ( 
    <section classNameName="mt-20 ">
    <div className="relative">
        <img src={props.src} alt='' className="" width='100%' height='10%' /> 
        <h5 className="absolute text-2xl md:text-3xl text-white bottom-7 left-1 -translate-x-1 mb-10 pl-4 md:pl-10 mt-10">
            {props.title}
          </h5>
          <h5 className="absolute text-sm md:text-xl text-white bottom-1 left-1 mb-10 pl-3 md:pl-9 mt-6">
          {props.description}
          </h5>
    </div>
</section>
     );
}
 
export default ProjectCard;