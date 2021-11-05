import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

export default function Services() {
    const [TourPackage, setTourPackage] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch('https://mighty-river-13958.herokuapp.com/limitservice')
            .then(res => res.json())
            .then(data => {
                setLoaded(true);
                setTourPackage(data)
            }
            )
    }, [])

    return (
        <div>
            <h1 className='text-success text-center mt-4'>
                Our services
            </h1>
            <hr style={{color:'red'}}/>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    !loaded?
                    <div className='d-flex justify-content-center'><Spinner animation='border'/></div>
                    :
                    TourPackage.map(data => <Service id={data._id} obj={data}></Service>)
                }
            </div>

        </div>
    )
}
