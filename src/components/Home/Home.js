import React from 'react'
import Agents from '../Agents/Agents'
import ClientComments from '../ClinetComments/ClientComments'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'
import Services from '../Services/Services'
import Slider from '../Slider/Slider'

export default function Home() {
    return (
        <div>
            <MenuBar></MenuBar>
            <Slider></Slider>
            <Services></Services>
            <Agents></Agents>
            <ClientComments></ClientComments>
            <Footer></Footer>
        </div>
    )
}
