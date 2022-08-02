import ProjectCard from "./projectCard";

function Projects(){

    const projectArray = [
        { src: "/Kupful.jpeg", 
        title: "KUPFUL",
        description: "A cup full of coffee",
        id: 1
        },
        { src: "/Mylo & Eddie.png",
        title: "MYLO & EDDIE",
        description: "Homemade meals in an old-fashioned ambience.",
        id: 2
        },
        { src: "/ETA.png",
        title: "ETA",
        description: "Discover pure talents",
        id: 3
        },
    ];

    return ( 
        <div className="relative">
          {projectArray.map((item) => (
            <ProjectCard
            title={item.title}
            src={item.src}
            description={item.description}
            key={item.id}
            />
          ))}
        </div>
     );
}
 
export default Projects;