import React from 'react'
import Navbar from "./Navbar"
import Bar from "./Bar"
import Sidebar from "./Sidebar"
import GlobalTravelDeals from './GlobalTravelDeals'
import Footer from "./Footer"
 

function Home() {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <Sidebar/>
      </div>
      <div>
      <Bar/></div>
      <GlobalTravelDeals/>
      <Footer/>
    </div>
  )
}

export default Home