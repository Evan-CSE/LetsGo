import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Footer from '../components/Footer/Footer'
import MenuBar from '../components/MenuBar/MenuBar'
import Service from '../components/Service/Service';
import './Style.css'

export default function AllServices() {
    const [TourPackage, setTourPackage] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage,setCurrentPage] = useState(0);


    useEffect(() => {
        setLoaded(false);
        fetch(`https://mighty-river-13958.herokuapp.com/service?page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setLoaded(true);
                setTourPackage(data.result)
                setPageCount(Math.ceil(parseInt(data.count) / 6));
                
            }
            )
    }, [currentPage])

    return (
        <div>
            <MenuBar></MenuBar>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    !loaded ?
                        <Spinner animation='border' className='d-block mx-auto' />
                        :
                        TourPackage.map(data => <Service id={data._id} obj={data}></Service>)
                }
            </div>
            <div className='pagination text-center m-5'>
                {
                    [...Array(parseInt(pageCount)).keys()].map(number => 
                    <button
                    className={number===currentPage?'selected':''}
                    key={number}
                    onClick={()=>setCurrentPage(number)}
                    >
                        {number+1}
                    </button>)
                }
            </div>
            <Footer></Footer>
        </div>
    )
}
