import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

export default function ManageOrder() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mighty-river-13958.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const cancelPlan = (tid) => {
        const choice = window.confirm('Are you sure want to cancel plan?');
        if (choice) {
            fetch(`https://mighty-river-13958.herokuapp.com/delete/${tid}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const newList = orders.filter(data => data.tid !== tid);
            setOrders(newList);
        }
    }

    const approvePlan = (data) => {
        const tid = data.tid;
        const url = `https://mighty-river-13958.herokuapp.com/updateStatus/${data.tid}`;
        const newStatus = { ...data };
        newStatus['status'] = 'approved';
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    data.status = 'approved';
                }
            })
    }

    return (
        <div >
            <MenuBar></MenuBar>
            {
                orders.length === 0 ? <div className='d-flex justify-content-center'>
                    <Spinner animation='border' />
                </div> :
                    <div className='row'>
                        {
                            orders.map(data => <div className='col-md-4 border border-success m-2 border-2'>
                                <h1>
                                    Package Name: {data.PackageName}
                                </h1>
                                <h3>
                                    Status: {data.status}
                                </h3>
                                <button onClick={() => cancelPlan(data.tid)} className='m-1 btn btn-danger'>
                                    Cancel Plan
                                </button>
                                <button className='m-1 btn btn-success' onClick={() => approvePlan(data)}>
                                    Approve Plan
                                </button>
                            </div>)
                        }
                    </div>
            }
            <Footer></Footer>
        </div>
    )
}
