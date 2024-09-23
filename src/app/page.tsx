import Schedule from '@/components/schedule/Schedule'
import Tracks from '@/components/tracks/Tracks'
import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import KeynoteSpeakers from '@/components/KeynoteSpeakers'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <KeynoteSpeakers/>

      <Schedule/>
      <Tracks/>
      <ContactUs/>
      <Footer/>
    </div>
  ) 
}

export default Home