import React, { useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import MenuBar from '../MenuBar/MenuBar'

export default function AddServices() {
    const nameRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const lengthRef = useRef();
    const descriptionRef = useRef();


    //handle form data
    const ClickHandler = (e) => {
        const name = nameRef.current.value;
        const length = lengthRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const des = descriptionRef.current.value;
        const newProduct = { name, length, price, img, des };
        console.log(newProduct);
        fetch('https://mighty-river-13958.herokuapp.com/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Package Successfully Inserted to database");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <MenuBar></MenuBar>

            <h3 className='text-center text-info'>
                Add Service
            </h3>
            <div className='mx-auto w-50 text-center border rounded-3 border-4 border-secondary p-4'>
                <form onSubmit={ClickHandler}>
                    <input ref={nameRef} type="text" placeholder='Package Name' /> <br />
                    <input ref={priceRef} type="number" placeholder='Price' /> <br />
                    <input ref={imgRef} type="text" placeholder='Phot Url' /> <br />
                    <input ref={lengthRef} type="number" placeholder='Package Length' /> <br />
                    <textarea ref={descriptionRef} placeholder='Plan Description'></textarea>
                    <br />
                    <input type="submit" value="Submit" className='btn btn-primary' />
                </form>

            </div>
            <Footer></Footer>
        </div>
    )
}
