import Contacts from "../components/Contact-Us/Contacts"
import Footer from "../components/Footer/footer"
import Mininav from "../components/NavBar/mini-nav"

const Contact = () => {
  return (
    <div>
    <Mininav/>
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