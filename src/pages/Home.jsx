import React from 'react'
import HeroSection from '../components/common/HeroSection'
import FamousCategories from '../components/homeComponents/FamousCategories'
import PopularPackages from '../components/homeComponents/PopularPackages'
import FeaturesSection from '../components/homeComponents/FeatureSection'
import CTASection from '../components/homeComponents/CTASection'
import TourPackagesSection from '../components/homeComponents/TourPackagesSection'



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


      </div>
    </>
  )
}

export default Home
