import React from 'react'
import Navber from './../components/navber/Navber';
import Banner from './../components/banner/Banner';
import Tolls from './../components/tolls/Tolls';
import Traffic from './../components/traffic/Traffic';
import Help from './../components/help/Help';
import Case from './../components/case/Case';

const Home = () => {
  return (
      <>
        <Navber/>
        <Banner/>
        <Tolls/>
        <Traffic/>
        <Help/>
        <Case/>
      </>
  )
}

export default Home