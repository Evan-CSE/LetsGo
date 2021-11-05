import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function AllOrder() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mighty-river-13958.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <MenuBar></MenuBar>
            {
                orders.length === 0 ? <div className='d-flex justify-content-center'><Spinner animation='border' /></div> :
                    <div className='row'>
                        {
                            orders.map(data => <div className='col-md-4 border border-2 border-success m-3'>
                                <h1>{data.PackageName}</h1>
                                <h3>
                                    Status: {data.status}
                                </h3>
                            </div>)
                        }
                    </div>
            }
            <Footer></Footer>
        </div>
    )
}
