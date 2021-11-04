import React from 'react'
import FirebaseConnect from '../../Firebase/FirebaseConnect'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'
import {useLocation,useHistory} from 'react-router-dom'

export default function Register() {
    const {user,setUser,error,auth,GoogleProvider,signInWithPopup} = FirebaseConnect(); 
    const history = useHistory();
    const HandleRegistration = () =>{
        signInWithPopup(auth,GoogleProvider)
        .then(result=>{
            setUser(result.user);
            history.push('/');
        })
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <button onClick={HandleRegistration} className='d-block mx-auto m-4 btn btn-success'>
                <h4>
                    Continue With Google
                </h4>
                {error}
            </button>
            <Footer></Footer>
        </div>
    )
}
