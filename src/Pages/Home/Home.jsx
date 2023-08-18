import React from "react";
import Hero from "../../components/HomeSection/Hero";
import HomeAbout from "../About/HomeAbout";
import DestinationHome from '../../components/HomeSection/Destina/DestinationHome'
import MostPoular from '../../components/Popular/MostPopular'
import Download from '../../components/Download/Download'
import Works from '../../components/Work/Works'
import HomeGallery from '../../components/HomeSection/HomeGallery/HomeGallery'

import "./Home.css";
const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPoular/>
      <DestinationHome/>
      <Download/>
      <Works/>
      <HomeGallery/>
    </>
  );
};

export default Home;
