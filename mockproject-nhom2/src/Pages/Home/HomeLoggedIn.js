import React from 'react'
import HeaderLoggedIn from '../../Component/Header/HeaderLoggedIn'
import Background from '../../Component/Background/Backgroud'
import Slider from '../../Component/Slider/Slider'
import Footer from '../../Component/Footer/Footer'
function HomeLoggedIn() {
    return (
      <div>
        <HeaderLoggedIn/>
        <Background/>
        <Slider/>
        <Footer/>
      </div>
    );
  }
  
  export default  HomeLoggedIn
  