import React from 'react'
import HeroSection from '../components/common/HeroSection'
import FamousCategories from '../components/homeComponents/FamousCategories'
import PopularPackages from '../components/homeComponents/PopularPackages'
import FeaturesSection from '../components/homeComponents/FeatureSection'
import CTASection from '../components/homeComponents/CTASection'
import TourPackagesSection from '../components/homeComponents/TourPackagesSection'
import GoogleReviews from '../components/homeComponents/GoogleReviews'



function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <FamousCategories />
        <PopularPackages />
        <FeaturesSection />
        <CTASection />
        <TourPackagesSection/>
        <GoogleReviews/>


      </div>
    </>
  )
}

export default Home
