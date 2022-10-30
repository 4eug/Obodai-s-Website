import ProjectCard from "./projectCard";

function Projects(){

    const projectArray = [
        { src: "/Carpe Diem.jpeg", 
        title: "Carpe Diem Beads & Beauty",
        description: "Breathing new life into an old identity.",
        url:"https://www.behance.net/gallery/146041441/Carpe-Diem-Beads-Beauty",
        id: 0
        },
        { src: "/ETA.jpeg",
        title: "Extraterrestrial Arts",
        description: "Discovering true African talents.",
        url:"https://www.behance.net/gallery/151594671/Extraterrestrial-Arts-Discovering-True-African-Talents",
        id: 1
        },
        { src: "/Wall of Fave.jpeg",
        title: "Wall of Fave",
        description: "A curated collection of our favorite logos.",
        url:"https://www.behance.net/gallery/153930483/Wall-of-Fave",
        id: 2
        },
    ];

    return ( 
        <div className="relative">
          {projectArray.map((item) => (
            <ProjectCard
            title={item.title}
            src={item.src}
            description={item.description}
            url={item.url}
            key={item.id}
            />
          ))}
        </div>
     );
}
 
export default Projects;