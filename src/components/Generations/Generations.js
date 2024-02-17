import React from 'react';
import '../Generations/Generations.css';
import { useState } from 'react';

function Generations() {


  return (
    <div className='Generations-container'>
      <div className='Generations-textarea'>
        <textarea id='generatedText' className='txtarea' readOnly placeholder='Click generate on forms to generate Descriptions'></textarea>
      </div>
    </div>
  );
}

export default Generations;
