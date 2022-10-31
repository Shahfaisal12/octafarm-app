import React from 'react'
import Brand from '../elements/Brand'
import GateWay from '../elements/GateWay'
import Hero from '../elements/Hero'
import Invest from '../elements/Invest'
import RoadMap from '../elements/RoadMap'
import Sale from '../elements/Sale'
import Tokenomic from '../elements/Tokenomic'
import Utilities from '../elements/Utilities'
import Faqs from '../utils/Faqs'
// import Umair from '../elements/Umair'

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Invest />
      <GateWay />
      <Sale />
      <Tokenomic />
      <Utilities />
      <RoadMap />
      <Faqs />
      {/* <Umair /> */}
    </>
  )
}

export default Home