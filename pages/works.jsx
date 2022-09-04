import AboutHead from "../components/About/About";
import Help from "../components/About/Help";
import WhatWeAre from "../components/About/What-we-are";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/footer"
import LetsTalk from "../components/Let's Talk/lets-talk";
import Mininav from "../components/NavBar/mini-nav"
import { CaseStudies } from "../components/Projects/works/caseStudies";
import Meta from "../components/utilities/meta/meta";

const About = () => {
  return (
    <div>
        <Meta title="Works"/>
    <Mininav/>
    <section>
    <AboutHead heading="WORK" title="Strategy-led design for amazing" title2="brand transformation." />
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