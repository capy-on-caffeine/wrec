import Schedule from '@/components/schedule/Schedule'
import Tracks from '@/components/tracks/Tracks'
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Tracks />
      <Schedule />
      <ContactUs/>
      <Footer/>
    </div>
  ) 
}

export default Home