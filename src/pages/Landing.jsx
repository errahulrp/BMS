import React from 'react'
import MenuBar from '../components/MenuBar'
import AboutUs from '../components/AboutUs'
import Mission from '../components/Mission'
import Vision from '../components/Vision'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Companys from '../components/Companys'

const Landing = () => {
    return (
        <div>
            <MenuBar />
            <Slider />
            <AboutUs />
            <Mission />
            <Vision />
            <Companys/>
            <Services />
            <Footer />
        </div>
    )
}

export default Landing