import Schedule from "@/components/schedule/Schedule";
import Tracks from "@/components/tracks/Tracks";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import KeynoteSpeakers from "./components/KeynoteSpeakers";
// import Tutorials from "./components/Tutorials";
import Committee from "@/components/committee/Committee";
import Details from "./components/Details";
import Mar from "./components/Mar";
import Marquee from "./components/Marquee";
import Events from "./components/Events";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Marquee />
      <Mar />
      <Details />
      <AboutUs />
      <Events />
      <Tracks />
      <KeynoteSpeakers />
      {/* <Tutorials /> */}
      <Schedule />
      <Committee />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
