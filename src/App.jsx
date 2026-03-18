import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured'
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Frequently from './components/Frequently';
const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full text-white min-h-screen bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About></About>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Frequently></Frequently>
      <Footer/>
      
      
    </div>
  )
}

export default App
