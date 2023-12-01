import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./index.scss"

function Detail() {
    let { id } = useParams();
    const [detail, setDetail] = useState(null)

    async function getFetch() {
        const data = await fetch("https://fakestoreapi.com/products/"+ id)
        const res = await data.json()
        setDetail(res)
        console.log(detail);
    }

    useEffect(() => {
        getFetch()
    }, [])

    return (
        <div className='cards'>
           
             {
               detail && <ul className='ApiList' key={detail.id}>
                <img className='picture' src={detail.image} alt="" />
                <h5 className='title'>Title:{detail.title}</h5>
                <li>Price:{detail.price} $</li>
                <li>Description: {detail.description.slice(0 ,35)}</li>
                <li className='category'>{detail.category}</li>
                
            </ul>
             }
           
        </div>
    )
}

export default Detail