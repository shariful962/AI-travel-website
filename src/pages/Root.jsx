import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import FeaturedDestinations from '../components/FeaturedDestinations'
import AiAssistant from '../components/AiAssistant'
import PricingPlans from '../components/PricingPlans'

const Root = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks /> 
      <FeaturedDestinations />
      <AiAssistant />
      <PricingPlans />
    </div>
  )
}

export default Root
