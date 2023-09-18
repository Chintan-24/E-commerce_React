import React from 'react'
import HeroSection from './components/HeroSection';
import FeatureProduct from './components/FeatureProduct';
const Home = () => {

  const data = {
    name: "Our Store",
  }

  return(

  <>  
    <HeroSection myData = {data} />
    <FeatureProduct />
  </> 
  )
}

export default Home