import React from 'react'
import { Link } from 'react-router-dom'

export default function FurnService() {
    return (
        <div>
        <div className='mininavbar'>
       <Link to={`/Home`} className='miniLink'>Home</Link>
       <Link to={`/cleanService`} className='miniLink'>Clean Service</Link>
       <Link to={`/paintService`} className='miniLink'>Paint Service</Link>
       <Link to={`/ElectricalService`} className='miniLink' >Electrical Service</Link>
        </div>
           <h1>Hello Furniture </h1> 
        </div>
    )
}
