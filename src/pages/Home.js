import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}
