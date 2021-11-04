import React from 'react'
import { Card } from 'react-bootstrap';

export default function ClientComment(props) {
    console.log("called ", props.cl);
    const { img, title, comment, rating, name } = props.cl;
    const style = {
        border: '5px solid gray',
        boxShadow: '3px 3px 3px 3px'
    }
    return (
        <Card className='singleCard'>
                <Card.Img variant="top" src={img}  height='200px'/>
                <Card.Body>
                    <Card.Title className='text-center text-danger h1'>{title}</Card.Title>
                    <Card.Text>
                        <span style={{ fontWeight: '900' }}>Customer Name: </span>
                        {name}
                        <br />
                        <span style={{ fontWeight: '900' }}> Comment: </span>
                        {comment} <br />
                        <span style={{ fontWeight: '900' }}>Rating: </span> {rating} <br />

                    </Card.Text>
                </Card.Body>
            </Card>
    )
}
