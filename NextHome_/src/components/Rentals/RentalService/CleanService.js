import React from 'react'
import { Link } from 'react-router-dom'
export default function CleanService() {
    return (
        <div>
         <div className='mininavbar'>
        <Link to={`/Home`} className='miniLink'>Home</Link>
       <Link to={`/EletricalService`} className='miniLink'>Electrical Service</Link>
       <Link to={`/furnService`} className='miniLink'>Furniture Service</Link>
       <Link to={`/paintService`} className='miniLink'>Paint Service</Link>
</div>

            <h1>Hello Clean services </h1>
        </div>
    )
}
