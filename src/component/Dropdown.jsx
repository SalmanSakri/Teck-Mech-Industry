
import React from 'react'
import {Link} from "react-router-dom"

import "../style/Dropdown.css"
const Dropdown = () => {
  return (
   <section>
    <div className='drop-nav'>
      <div className='drop-nav-container'>
      <ul className='drop-nav-box'>
      <Link to="/MultiSpringSeal"> <li className='drop-1'>MultiSpringSeal</li></Link>
       <Link to="*"> <li className='drop-2'>PTFE Bellow</li></Link>
       <Link to="*"><li className='drop-3'>Single Coil Spring</li></Link>
       <Link to="*"> <li className='drop-4'>Reactor-Agitator-Mixer</li></Link>
       <Link to="*"><li className='drop-1'>Conical Spring</li></Link>
       <Link to="*"><li className='drop-2'>PTFE Bellow</li></Link>
       <Link to="*"><li className='drop-3'>Single Coil Spring</li></Link>
       <Link to="*"> <li className='drop-4'>Reactor-Agitator-Mixer</li></Link>

      </ul>
      </div>
    </div>
   </section>
  )
}

export default Dropdown