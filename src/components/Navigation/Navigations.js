import React from 'react'
import { useState } from 'react'
import '../Navigation/Navigations.css'
import BasicForm from '../BasicForm/BasicForm'
import AdvancedForm from '../AdvancedForm/AdvancedForm'

function Navigations( { onLoadingSpinnerSet }) {
  const [basicFormVisibility, setBasicFormVisibility]=useState(false)
  const [advancedFormVisibility, setAdvancedFormVisibility]=useState(false)
  
  const clearGenerated = () => {
    const textarea = document.querySelector('#generatedText');
    if (textarea) {
      textarea.value = '';
    }
  };

  const copyGenerated = () => {
    const textarea = document.querySelector('#generatedText');
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      console.log('Text copied to clipboard');
    }
  };
  const toggleVisibilityBasic = () => {
    setBasicFormVisibility(!basicFormVisibility);
    
  };
  const toggleVisibilityAdvanced = () => {
    setAdvancedFormVisibility(!advancedFormVisibility);
  };

  return (
    <div className='Navigations-container'>
      
      <div>
        <div className='mobile-navi'>
            <div><button className='mbutton' onClick={()=>setBasicFormVisibility(!basicFormVisibility)}>Basic</button></div>
            <div><button className='mbutton' onClick={()=>setAdvancedFormVisibility(!advancedFormVisibility)}>Advanced</button></div>
            <div><button className='mbutton' onClick={copyGenerated}>Copy</button></div>
            <div><button className='mbutton' onClick={clearGenerated}>Clear</button></div>

        </div>
        <h5 className='copyrightm mobile'>&copy; Describeit.com - Copyright@2024</h5>
      </div>
         {/*  <h3 className='Navi-title laptop'>Describe<span className='Navi-IT'>It</span></h3>
          <h3>Select Generation Type:</h3> */}
          <div><button className='Navi-basic laptop' onClick={()=>{setBasicFormVisibility(!basicFormVisibility);setAdvancedFormVisibility(false)}}>Basic</button></div>
          <div><button className='Navi-advanced laptop' onClick={()=>{setAdvancedFormVisibility(!advancedFormVisibility);setBasicFormVisibility(false)}}>Advanced</button></div>
          <div>
          {advancedFormVisibility && 
      <div>
        <div key={1} className='basic-form-modal'>
          <AdvancedForm onGenerate={onLoadingSpinnerSet} className='basic-form-render'/>
        </div>
      </div>
      }
      {basicFormVisibility &&
      <div>
        <div key={2} className='basic-form-modal'>
        <BasicForm onGenerate={onLoadingSpinnerSet} className='basic-form-render'/>
      </div>
      </div>
      }
          {/* <div className='Navi-genoptions laptop'>
            <h3>Actions: </h3>
            <div className='Navi-generate laptop'>
              <button className='Navi-gen-btn laptop' onClick={copyGenerated}>Copy</button>
              <button className='Navi-clear-btn laptop' onClick={clearGenerated}>Clear</button>
            </div>
          </div> */}
          </div>
          
      </div>
    
  )
}

export default Navigations