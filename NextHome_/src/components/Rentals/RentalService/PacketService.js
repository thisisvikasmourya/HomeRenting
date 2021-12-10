import React from 'react'
import { Link } from 'react-router-dom'
export default function PacketService() {
    return (
        <div>
         <div className='mininavbar'>
        <Link to={`/Home`} className='miniLink'>Home</Link>
       <Link to={`/cleanService`} className='miniLink'>Clean Service</Link>
       <Link to={`/furnService`} className='miniLink'>Furniture Service</Link>
       <Link to={`/paintService`} className='miniLink'>Paint Service</Link>
</div>
          <h1>Hello Packet Service</h1>  
        </div>
    )
}
