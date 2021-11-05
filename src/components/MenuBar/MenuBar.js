import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import FirebaseConnect from '../../Firebase/FirebaseConnect'

export default function MenuBar() {
    const style = {
        'margin-right': '20px',
        'color': 'white',
        textDecoration: 'none',
        fontSize: '25px'
    }
    const { user, GoogleLogin, LogOut } = FirebaseConnect();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink exact to='/' style={style}>Lets Go</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink exact to='/' style={style} >Home</NavLink>
                        <NavLink exact to='/services' style={style} >Services</NavLink>
                        <NavLink exact to='/about' style={style} >About Us</NavLink>
                        <NavLink exact to='/addService' style={style} >Add Services</NavLink>

                        <NavLink exact to='/contact' style={style} >Contact Us</NavLink>
                        <NavLink exact to='/allOrder' style={style} >All Orders</NavLink>
                        
                    </Nav>

                    {
                        user.email ?
                            <span>
                                <h3 >
                                    <Link to='/user' style={{ textDecoration: 'none',marginRight:'15px' }}>
                                        {user.displayName}
                                    </Link>
                                    <Link to='/myOrder'  style={{ textDecoration: 'none',color:'orchid' }}>
                                        My Order
                                    </Link>
                                </h3>
                                <button className='text-danger bg-warning border rounded' onClick={LogOut}>LogOut</button>
                                <Link to='/manageOrder' style={{ textDecoration: 'none',color:'goldenrod',fontSize:'25px' }}>
                                    Manage Orders
                                </Link>
                            </span>
                            :
                            <Nav className='ms-auto'>
                                <NavLink exact to='/login' style={style} >Login</NavLink>
                                <NavLink exact to='/register' style={style} >Register</NavLink>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
