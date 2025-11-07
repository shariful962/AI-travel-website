import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import FeaturedDestinations from './components/FeaturedDestinations'
import AiAssistant from './components/AiAssistant'
import PricingPlans from './components/PricingPlans'
import Footer from './components/Footer'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ForgotPassword from './components/auth/ForgotPassword'
import OtpVerify from './components/auth/OtpVerify '
import ResetPassword from './components/auth/ResetPassword'


function App() {
  
  return (
    <div>
      {/* <Header />
      <HeroSection />
      <HowItWorks /> 
      <FeaturedDestinations />
      <AiAssistant />
      <PricingPlans />
      <Footer /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <ForgotPassword />  */}
      {/* <OtpVerify /> */}
      <ResetPassword />
    </div>
  )
}

export default App
