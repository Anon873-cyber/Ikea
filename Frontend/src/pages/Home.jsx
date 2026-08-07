import React from 'react'
import Banner from '../components/Cards/BannerCard/BannerCard.jsx'
 //import Banner from '../components/Cards/Banner/SofaBanner.jsx'
import FeaturedSection from '../components/Sections/FeaturedSection.jsx'
import LatestProducts from '../components/Sections/LatestProducts.jsx'
function Shop() {
  return (
    <div className='w-full'>
      <Banner/>
      <FeaturedSection productQuery={"page=0items=10&category=Furniture"}/>
      <LatestProducts/>
    </div>
  )
}

export default Shop