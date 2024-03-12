import React from 'react';
import '../Generations/Generations.css';
import { useState } from 'react';

function Generations() {
 const void_copier = (event) =>{
  return false;
 }

  return (
    <div className='Generations-container'>
      <div className='Generations-textarea' onCopy={(event) => (event.preventDefault())}>
        <textarea id='generatedText' onCopy={(event) => (event.preventDefault())} onMouseDown={void_copier} onSelect={void_copier} className='txtarea' readOnly placeholder='Click generate on forms to generate Descriptions'></textarea>
      </div>
    </div>
  );
}

export default Generations;
