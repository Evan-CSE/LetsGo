import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap';

export default function Agents() {
    const [agent, setAgent] = useState({});


    useEffect(() => {
        fetch('https://mighty-river-13958.herokuapp.com/agent')
            .then(res => res.json())
            .then(data => setAgent(data))
    }, [])


    return (
        <div>
            <h1 className='text-center text-danger'>
                Our Agents
            </h1>
            <hr style={{ color: 'red' }} />
            {
                !agent.length == 0 ?
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                        {
                            agent.map(a => <Card className='singleCard'>
                                <Card.Img variant="top" src={a.img} height='200px' />
                                <Card.Body>
                                    <Card.Title className='text-center text-danger h1'>{a.name}</Card.Title>
                                    <Card.Text>
                                        <span style={{ fontWeight: '900' }}> Phone: </span> {a.Phone} <br />
                                        <span style={{ fontWeight: '900' }}>  Designation:</span> {a.Role}
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                        }
                    </div> : <div className='d-flex justify-content-center'><Spinner animation='border' /></div>
            }
        </div>
    )
}
