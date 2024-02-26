import React from 'react'
import '../UserDetail/UserDetail.css'

function UserDetail({ onSendGeneration }) {
    const handleSendGeneration = () => {
        onSendGeneration();
      };
  return (
    <div className="userdetail-container">
        <div className="names">
            <input className="namebox" type='textbox' placeholder='First Name'/>
            <input className="namebox" type='textbox' placeholder='Last Name'/>
        </div>
        <div className='email-div'><input className='emailbox' type="email" placeholder='Enter email'/></div>
        <input className='send-btn' type='submit' onClick={handleSendGeneration} value='Send Generation'/>
    </div>
  )
}

export default UserDetail