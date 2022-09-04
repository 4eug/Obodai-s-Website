import WorkCard from "../../utilities/cards/workCard";


/* eslint-disable @next/next/no-html-link-for-pages */
export const CaseStudies = () => {
    const studiesArray = [
        {
          title: "KUPFUL",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          imgSrc: "/Kupful.jpeg",
          type: "Identity Design/Positioning",
          id: 1,
        },
        {
          title: "Mylo & Eddie",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          imgSrc: "/Mylo & Eddie.png",
          lgFlexDirection: "lg:flex-row-reverse",
          type: "Identity Design/Positioning",
          id: 2,
          
        },
        {
          title: "EXTRATERRESTRIAL ARTS",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          imgSrc: "/ETA.png", 
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