import WorkCard from "../../utilities/cards/workCard";


/* eslint-disable @next/next/no-html-link-for-pages */
export const CaseStudies = () => {
    const studiesArray = [
        {
          title: "Carpe Diem Beads & Beauty ",
          description: "After some months of operating, Carpe Diem was evolving from the bead making business it was into a beauty brand. Their current logo didn't reflect the brand's new direction, so they approached us to help give the brand a facelift.",
          imgSrc: "/Carpe Diem.jpeg",
          id: 0,
        },
        {
          title: "Extraterrestrial Arts, LLC.",
          description: "A talent management company on a mission to help young African talents reach their full potentials, and give them a platform to attain a global level of acclaim. They approached us to help create a brand that will reflect this ambition.",
          imgSrc: "/ETA.jpeg",
          lgFlexDirection: "lg:flex-row-reverse",
          type: "Identity Design/Positioning",
          id: 1,
          
        },
        {
          title: "Wall of Fave",
          description: "A curated collection of our favorite logos among the identities we crafted for brands across various industries, between 2019 - 2021. This collection consists of logotypes, symbols & combination marks. This is for the brand thinker looking some logo inspiration. Enjoy!",
          imgSrc: "/Wall of Fave.jpeg", 
          type: "Identity Design/Positioning",
          id: 2,
        },
        {
          title: "Marvin's Touch",
          description: "Coming Soon",
          imgSrc: "/ETA.png", 
          lgFlexDirection: "lg:flex-row-reverse",
          type: "Identity Design/Positioning",
          id: 3,
        },
        
      ];
    return (
      <div className="px-4 py-2 md:ml-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:m-auto md:px-24 lg:px-8 lg:py-10">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl  m-auto">
          
        </div>
       <div className="mt-2">
        {studiesArray.map((item) => (
            <WorkCard
            title={item.title}
            description={item.description}
            src={item.imgSrc}
            lgFlexDirection={item.lgFlexDirection}
            type={item.type}
            key={item.key}
            />
        ))}
       </div>
      </div>
    );
  };