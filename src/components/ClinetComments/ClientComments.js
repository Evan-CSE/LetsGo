import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ClientComment from './ClientComment'

export default function ClientComments() {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        fetch('https://mighty-river-13958.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            }
            )
    }, [])

    return (
        <div>
            <h1 className='text-primary text-center mt-4'>
                Our Happy Clients Say
            </h1>
            <hr style={{color:'red'}}/>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr'}}>
                {
                   comments.length===0? 
                   <Spinner animation='border'/>
                   :comments.map(client =>
                        <ClientComment id = {client._id} cl={client}></ClientComment>
                    )
                }
            </div>
        </div>
    )
}
