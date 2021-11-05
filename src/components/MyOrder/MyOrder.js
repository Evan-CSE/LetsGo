import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import FirebaseConnect from '../../Firebase/FirebaseConnect'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function MyOrder() {

    const { user, isLoading } = FirebaseConnect();
    const [myorder, setMyOrder] = useState([]);
    const [tripCancel, setTripCancel] = useState(false);
    const [dataLoaded,setDataLoaded] = useState(false);

    const DeletePlan = (tid) => {
        setTripCancel(false);
        const ans = window.confirm("Are you sure want to cancel this trip?");
        if (ans) {
            setTripCancel(true);
            fetch(`https://mighty-river-13958.herokuapp.com/delete/${tid}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const newList = myorder.filter(data => data.tid !== tid);
            setMyOrder(newList);
        }

    }

    useEffect(() => {
        fetch(`https://mighty-river-13958.herokuapp.com/order/${user.uid}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))

    }, [user, tripCancel])

    return (
        <div>
            <MenuBar></MenuBar>
            {
                (isLoading  || myorder.length===0) ?
                    <div className='d-flex justify-content-center'><Spinner animation='border' /></div> :

                    <div className='row'>
                        {myorder.map(data =>
                            <div key={data._id} className='col-md-4 border border-3 border-success m-2 p-2'>
                                <h1>Package: {data.PackageName}</h1>
                                <h3>Status: {data.status}</h3>
                                <button onClick={() => DeletePlan(data.tid)} className='btn btn-danger'>Cancel</button>
                            </div>
                        )}
                    </div>
            }
            <Footer></Footer>
        </div>
    )
}
