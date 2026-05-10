import React from 'react';
import Hero from '../components/hero/Hero';
import LogoSlider from '../components/logoSlider/LogoSlider';
import FeatureWorkSection from '../components/feature/featureWork';
import Services from '../components/services/Services';
import Insights from '../components/insights/Insights';
import MarqueeSlider from '../components/marquee/MarqueeSlider';
import CardSlider from '../components/cards/CardSlider';
import AnimatedTextSlider from '../components/footer/AnimatedTextSlider';
const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <LogoSlider/>
      <FeatureWorkSection/>
      <Services/>
      <MarqueeSlider/>
      <CardSlider/>
      <Insights/>
      <AnimatedTextSlider/>
    </div>
  );
};

export default Home;