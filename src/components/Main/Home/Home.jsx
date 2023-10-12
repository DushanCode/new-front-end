import React from 'react';
import Homearea1 from '../Components/Main/Home/Homearea1';
import Homearea2 from '../Components/Main/Home/Homearea2';
import Homearea3 from '../Components/Main/Home/Homearea3';
import Review from '../Components/Review';
import HeroSection from '../Components/Main/Home/HeroSection';

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <Homearea1/>
        <Homearea2/>
        <Homearea3/>
        <Review/>
    </div>
  )
}

