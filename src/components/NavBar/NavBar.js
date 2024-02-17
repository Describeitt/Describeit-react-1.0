import React from 'react'
import '../NavBar/Navbar.css'

function NavBar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-header'>
            <img className='logo' src='/DescribeITlogo.jpeg' />
            <h2 className='navbar-title'>Describe<span className='itnav'>It</span></h2>
        </div>

    </div>
  )
}

export default NavBar