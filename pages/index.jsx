import Head from 'next/head';
import Hero from '../components/Hero/hero';
import Message from '../components/Message/message';
import Navbar from '../components/NavBar/nav';
import Projects from '../components/Projects/projects';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Obodai Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <Hero heading='WELCOME TO'/>   
      <Message/>
      <section className='mt-10'>
      <Projects/>
      </section>
      
      
    </div>
  );
}
