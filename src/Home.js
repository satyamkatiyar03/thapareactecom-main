import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureProduct from './components/FeatureProduct';
import Services from './components/Services';
import Trusted from "./components/Trusted";
const Home = () => {
  return(<>
    <HeroSection myData="CoolDev Store"/>
    <FeatureProduct/>
    <Services />
    <Trusted />
    
  </>
    
  ) 
}

export default Home;