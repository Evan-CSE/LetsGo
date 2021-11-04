import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import FirebaseConnect from '../../Firebase/FirebaseConnect'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function MyOrder() {

    const { user ,setUser} = FirebaseConnect();
    const [myorder, setMyOrder] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tripCancel,setTripCancel] = useState(false);


    const DeletePlan = (tid) =>{
        const ans = window.confirm("Are you sure want to cancel this trip?");
        if(ans){
            setTripCancel(false);
            fetch(`https://mighty-river-13958.herokuapp.com/delete/${tid}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>console.log(data));
            const newList = myorder.filter(data=>data.tid!==tid);
            setMyOrder(newList);
            
        }
        
    }

    useEffect(() => {
        setIsLoaded(false);
        while (user.length === 0);
        fetch(`https://mighty-river-13958.herokuapp.com/order/${user.uid}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
        setIsLoaded(true);
    }, [user,tripCancel])

    return (
        <div>
            <MenuBar></MenuBar>
            <div className='row my-5'>
                {
                    isLoaded ?
                        <>
                           { myorder.map(data=> 
                                <div className='col-md-4 border border-3 border-success m-2 p-2'>
                                    <h1>Package: {data.PackageName}</h1>
                                    <h3>Status: {data.status}</h3>
                                    <button onClick={()=>DeletePlan(data.tid)} className='btn btn-success'>Cancel</button>
                                </div>
                            )}
                        </>
                        : <Spinner animation='border' className='text-center' />
                }
            </div>
            <Footer></Footer>
        </div>
    )
}
