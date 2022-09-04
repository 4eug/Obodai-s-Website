import AboutHead from "../components/About/About";
import Help from "../components/About/Help";
import WhatWeAre from "../components/About/What-we-are";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/footer"
import LetsTalk from "../components/Let's Talk/lets-talk";
import Mininav from "../components/NavBar/mini-nav"
import Meta from "../components/utilities/meta/meta";

const About = () => {
  return (
    <div>
      <Meta title="About"/>
    <Mininav/>
    <section>
     <AboutHead heading="ABOUT" title="For bold, forward-" title2="thinking businesses." />
     <hr className="my-2 mx-4 border-gray-700 sm:mx-auto lg:mx-16"/>
    </section>
    <WhatWeAre/>
    <hr className="my-2 mx-4 border-gray-700 sm:mx-auto lg:mx-16"/>
    <Help/>
    <hr className="my-2 mx-4 border-gray-700 sm:mx-auto lg:mx-16"/>
    <Brands/>
    <section className='bg-gray-100 py-2'>
      <LetsTalk/>
    </section>
    <section>
    <Footer/>
    </section>
      
    </div>
  )
}

export default About;