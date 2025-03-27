import React from 'react'
import Footer from '../mycomponents/Footer'
import Subscribe from '../mycomponents/Subscribe'
import Download from '../mycomponents/Download'
import Testimonial from '../mycomponents/Testimonial'
import Clients from '../mycomponents/Clients'
import ContentSection from '../mycomponents/ContentSection'
import Hero from '../mycomponents/Hero'
import Header from '../mycomponents/Header'
import AnimatedContent from '../mycomponents/AnimatedContent'
import FAQ from '../mycomponents/FAQ'
import Button from '../mycomponents/Button'

const page = () => {
    return (
        <>
        
        <div className=''>
            <Header/>
            <Hero/>
            <ContentSection/>
            <Clients/>
            <Testimonial/>
            <FAQ/>
            <Download/>
            <Subscribe />
            <Footer />
            {/* <Button/> */}
        </div>
        </>
    )
}

export default page
