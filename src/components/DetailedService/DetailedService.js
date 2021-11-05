import React, { useEffect, useRef, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router'
import FirebaseConnect from '../../Firebase/FirebaseConnect';
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function DetailedService() {
    const { user } = FirebaseConnect();
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const url = `https://mighty-river-13958.herokuapp.com/service/${id}`;
    const NameRef = useRef();
    const AddressRef = useRef();
    const tidRef = useRef();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])


    const formHandler = (e) => {
        const PackageName = details.name;
        const Cutomer = NameRef.current.value;
        const address = AddressRef.current.value;
        const tid = tidRef.current.value;
        const userId = user.uid;
        const status = 'pending';
        console.log(AddressRef.current.value);
        const obj = { PackageName, Cutomer, address, tid, userId, status };
        fetch('https://mighty-river-13958.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your record is saved.Please wait for confirmation. You can check your confirmation of the package from My Order Option. Thank You!");
                }
            });
        e.target.reset();
        e.preventDefault();
    }

    return (
        <div>
            <MenuBar></MenuBar>
            <h2 className='text-center text-secondary'>
                To Confirm your order please bKash at 01821484988 amounted as the package price.
            </h2>
            {
                details.name ? <div className='row align-items-center'> <div className='col-md-6'>
                    <h1 className='text-center text-danger'> {details.name} </h1>
                    <img src={details.img} className='w-50 d-block mx-auto' alt="" /> <br />
                    <p className='text-center'>
                        Package Duration: {details.length} <br />
                        Price: {details.price}
                        <p>
                            {details.des}
                        </p>
                    </p>
                </div>
                    <form onSubmit={formHandler} className='col-md-6'>
                        <table >
                            <tr>
                                <td>
                                    User Name:
                                </td>
                                <td><input type="text" value={user.displayName} /></td>

                            </tr>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                    <input type="text" value={user.email}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Reference Name:
                                </td>
                                <td>
                                    <input type="text" placeholder='Name Of the Recipient' ref={NameRef} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td><textarea placeholder='Address of the customer' cols="30" rows="10" ref={AddressRef} required></textarea></td>
                            </tr>
                            <tr>
                                <td>Transaction Id: </td>
                                <td><input type="text" placeholder='Enter Your Transaction id' ref={tidRef} required /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="Confirm" className='btn btn-primary' />
                                </td>
                            </tr>
                        </table>

                    </form>
                </div>
                    : <div className='d-flex justify-content-center'><Spinner animation='border' /></div>
            }
            <Footer></Footer>
        </div>
    )
}
