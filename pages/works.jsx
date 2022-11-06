import AboutHead from "../components/About/About";
import Help from "../components/About/Help";
import WhatWeAre from "../components/About/What-we-are";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/footer"
import LetsTalk from "../components/Let's Talk/lets-talk";
import AboutNav from "../components/NavBar/about-nav";
import Mininav from "../components/NavBar/mini-nav"
import { CaseStudies } from "../components/Projects/works/caseStudies";
import Meta from "../components/utilities/meta/meta";

const About = () => {
  return (
    <div>
        <Meta title="Works"/>
    <AboutNav/>
    <section>
    <AboutHead heading="" title="We give brands clarity," title2="and a personality to thrive." />
    <hr className="my-2 mx-4 border-gray-700 sm:mx-auto lg:mx-16"/>
    </section>
    <CaseStudies/>
    <section className='mt-20 bg-gray-100 py-2'>
      <LetsTalk/>
    </section>
    <section>
    <Footer/>
    </section>
      
    </div>
  )
}

export default About;