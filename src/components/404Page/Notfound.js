import React from 'react'
import img from '../../images/404.jpg'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'
export default function Notfound() {
    return (
        <div>
            <MenuBar></MenuBar>
            <img src={img} alt="Page not found" width='100%' height='500px'/>
            <Footer></Footer>
        </div>
    )
}
