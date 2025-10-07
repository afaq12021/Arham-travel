import React from 'react'
import HeroSection from '../components/common/HeroSection'
import FamousCategories from '../components/homeComponents/FamousCategories'
import PopularPackages from '../components/homeComponents/PopularPackages'



function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <FamousCategories />
        <PopularPackages />



      </div>
    </>
  )
}

export default Home
