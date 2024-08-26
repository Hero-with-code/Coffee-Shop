import React from 'react'
import "../../Styles/HomeStyle.css";

import Header from '../../Components/Layouts/Header' 
import HomeSection1 from '../Home/HomeSection1'
import AboutSection2 from '../Home/AboutSection2'
import ServiceSection3 from '../Home/ServiceSection3'
import WhyUsSection4 from '../Home/WhyUsSection4'
import GallerySection5 from '../Home/GallerySection5'
import ContactSection6 from '../Home/ContactSection6'
import Footer from '../../Components/Layouts/Footer'

function Home() {
  return (
    <>  
    
    <Header />

    <HomeSection1 />

    <AboutSection2 /> 

    <ServiceSection3 /> 

    <WhyUsSection4 /> 

    <GallerySection5 />

    <ContactSection6 />

    <Footer />


    </>
  )
}

export default Home