import Contacts from "../components/Contact-Us/Contacts"
import Footer from "../components/Footer/footer"
import ContactNav from "../components/NavBar/contact-nav"
import Meta from "../components/utilities/meta/meta"

const Contact = () => {
  return (
    <div>
      <Meta title="Contact" />
      <ContactNav/>
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