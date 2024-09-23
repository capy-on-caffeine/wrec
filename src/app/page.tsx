import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import KeynoteSpeakers from './components/KeynoteSpeakers'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <KeynoteSpeakers/>
      <ContactUs/>
      <Footer/>
    </div>
  ) 
}

export default Home