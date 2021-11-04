import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router';
import './Service.css'

export default function Service(props) {
    const {name,length,price,img,des,_id} = props.obj;
    const history = useHistory();

    const HandleClick = id=>{
        history.push(`/service/${id}`);
    }

    return (
        <Card className='singleCard'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className='text-center text-danger h1'>{name}</Card.Title>
                <Card.Text>
                    {des} <br />
                    <span style={{fontWeight:'900'}}> Price: </span> {price} <br />
                    <span style={{fontWeight:'900'}}>  Duration:</span> {length}
                </Card.Text>
                <Button className='btn btn-warning border rounded-3 text-dark' onClick={()=>{HandleClick(_id)}}>Confirm Package</Button>
            </Card.Body>
        </Card>
    )
}
