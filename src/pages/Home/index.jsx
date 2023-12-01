import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"

function Home() {
    const [home, setHome] = useState([])

    useEffect(() => {
        getFetch()
    }, [])

    async function getFetch() {
        const data = await fetch("https://fakestoreapi.com/products")
        const res = await data.json()
        setHome(res)
    }

    return (
        <div>
            <div className='Cards'>
                {home.map((x) => {
                    return (
                        <NavLink to={"/detail/" + x.id} style={({ isActive }) => {
                            return {
                              
                              color: isActive ? "black" : "black",
                              
                            };
                          }}>
                        <ul className='ApiList' key={x.id}>
                            <img className='picture' src={x.image} alt="" />
                            <h5 className='title'>Title:{x.title}</h5>
                            <li>Price:{x.price} $</li>
                            <li>Description: {(x.description).slice(0, 35)}</li>
                            <li className='category'>{x.category}</li>
                        </ul>
                            </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default Home