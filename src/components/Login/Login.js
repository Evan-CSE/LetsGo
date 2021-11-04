import React from 'react'
import FirebaseConnect from '../../Firebase/FirebaseConnect'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'
import {useLocation,useHistory} from 'react-router-dom'


export default function Login() {
    const {user,error,auth,GoogleProvider,signInWithPopup} = FirebaseConnect(); 
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const HandleLogin = () =>{
        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            history.push(redirect_url); 
        })
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <h1 className='text-center'>
            Login Page
            </h1>
            {error}
            <br />
            <button onClick={HandleLogin} className='btn btn-success d-block mx-auto'>
                Sign in with google
            </button>
            <Footer></Footer>
        </div>
    )
}
