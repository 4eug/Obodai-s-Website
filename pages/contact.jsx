import Contacts from "../components/Contact-Us/Contacts"
import Footer from "../components/Footer/footer"
import Headnav from "../components/NavBar/head-nav"
import Meta from "../components/utilities/meta/meta"

const Contact = () => {
  return (
    <div>
      <Meta title="Contact" />
    <Headnav/>
    <section className='md:mt-32 mt-16'>
    <Contacts/>
    </section>
    <section className='mt-10'>
    <Footer/>
    </section>
      
    </div>
  )
}

export default Contact