import React, { useState } from 'react'
import FirebaseConnect from '../../Firebase/FirebaseConnect'
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';


export default function Dahsboard() {
    const { user, LogOut, UpdateGoogleProfile } = FirebaseConnect();
    const [phone, setPhone] = useState(user.phoneNumber);

    //set value
    const changeNumber = (e) => {
        setPhone(e.target.value);
        console.log(phone);
        e.preventDefault();
    }


    //update phone
    const updatePhone = () => {
        UpdateGoogleProfile(phone);
        alert("Update successfully");
    }

    return (
        <div>
            <MenuBar></MenuBar>
            <h1 className='text-info text-center'>
                Welcome {user.displayName}
            </h1>

            <div className='text-center'>
                <img src={user.photoURL} />
            </div>
            <div>
                <h3 className='text-center text-success mt-5'>
                    Name: {user.displayName}
                </h3>
                <h3 className='text-center text-success mt-5'>
                    email: {user.email}
                </h3>
            </div>
            <Footer></Footer>
        </div>
    )
}
