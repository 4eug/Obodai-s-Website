import AboutHead from "../components/About/About";
import WhatWeAre from "../components/About/What-we-are";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/footer"
import LetsTalk from "../components/Let's Talk/lets-talk";
import Mininav from "../components/NavBar/mini-nav"

const About = () => {
  return (
    <div>
    <Mininav/>
    <section>
     <AboutHead/>
    </section>
    <WhatWeAre/>
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