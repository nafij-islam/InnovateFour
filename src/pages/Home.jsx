import React from 'react'
import Navber from './../components/navber/Navber';
import Banner from './../components/banner/Banner';
import Tolls from './../components/tolls/Tolls';
import Traffic from './../components/traffic/Traffic';
import Help from './../components/help/Help';
import Case from './../components/case/Case';
import Plans from './../components/plans/Plans';
import Seo from './../components/seo/Seo';
import { Footer } from './../components/footer/Footer';

const Home = () => {
  return (
      <>
        <Navber/>
        <Banner/>
        <Tolls/>
        <Traffic/>
        <Help/>
        <Case/>
        <Plans/>
        <Seo/>
        {/* <Footer/> */}
      </>
  )
}

export default Home