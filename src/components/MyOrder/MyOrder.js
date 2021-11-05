import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import FirebaseConnect from '../../Firebase/FirebaseConnect'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function MyOrder() {

    const { user,isLoading} = FirebaseConnect();
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
        fetch(`https://mighty-river-13958.herokuapp.com/order/${user.uid}`)
            .then(res => res.json())
            .then(data => {setMyOrder(data);setIsLoaded(true);})
        
    }, [user,tripCancel])

    return (
        <div>
            <MenuBar></MenuBar>
                {
                    isLoaded || isLoading ?
                        <div className='row'>
                           { myorder.map(data=> 
                                <div key={data._id} className='col-md-4 border border-3 border-success m-2 p-2'>
                                    <h1>Package: {data.PackageName}</h1>
                                    <h3>Status: {data.status}</h3>
                                    <button onClick={()=>DeletePlan(data.tid)} className='btn btn-danger'>Cancel</button>
                                </div>
                            )}
                        </div>
                        : <div className='d-flex justify-content-center'><Spinner animation='border'/></div>
                }
            <Footer></Footer>
        </div>
    )
}
