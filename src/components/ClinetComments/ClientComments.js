import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ClientComment from './ClientComment'

export default function ClientComments() {
    const [comments, setComments] = useState([]);

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
            <hr style={{ color: 'red' }} />
            {
                comments.length === 0 ?
                    <div className='d-flex justify-content-center'><Spinner animation='border' /></div>
                    :
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr' }}>
                        {comments.map(client =>
                            <ClientComment id={client._id} cl={client}></ClientComment>
                        )
                        }
                    </div>
            }
        </div>
    )
}
