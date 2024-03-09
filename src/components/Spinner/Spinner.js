import React from 'react'
import '../Spinner/Spinner.css'

function Spinner() {
  return (
    <div className='Spinner-parent' >
      <div >
        <h3 className='Spinner-text'>Generating Description...</h3>
        <img className="flipping Spinnerlogo" src='/DescribeITlogo.jpeg' />
      </div>
    </div>
  )
}

export default Spinner