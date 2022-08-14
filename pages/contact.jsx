import Contacts from "../components/Contact-Us/Contacts"
import Mininav from "../components/NavBar/mini-nav"

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto">
    <Mininav/>
    <section className='md:mt-32 mt-16'>
    <Contacts/>
    </section>
      
    </div>
  )
}

export default Contact