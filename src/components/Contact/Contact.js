import React from 'react'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function Contact() {
    return (
        <div>
            <MenuBar></MenuBar>
            <h3 className="text-success text-center">
                Contact Us
            </h3>
            <div >
                <table className='mx-auto'
                
                >
                    <tr><td><input type="text" placeholder='Your Name' /></td></tr>
                    <tr>
                        <td>
                            <input type="email" placeholder='Your mail' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea placeholder='Your feedback' cols="30" rows="10"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-primary'>
                                Send
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer></Footer>
        </div>
    )
}
