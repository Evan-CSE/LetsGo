import React from 'react'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function About() {
    return (
        <div>
            <MenuBar></MenuBar>
            <h3 className="text-center text-success">
                Who we are
            </h3>
            <p className='mx-auto w-50'>
                We are a tourist assistant group. We provide customer a great tour planning. We believe in our service & quality. We offer more than 12 services & plans for our beloved customers.
            </p>
            <Footer></Footer>
        </div>
    )
}
