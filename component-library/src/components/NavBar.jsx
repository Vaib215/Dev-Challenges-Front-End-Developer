import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav'>
        <h3><Link to='/'>Home</Link></h3>
        <h3><Link to="/buttons">Buttons</Link></h3>
        <h3><Link to="/inputs">Inputs</Link></h3>
    </div>
  )
}

export default NavBar