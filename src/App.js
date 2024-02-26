import './App.css';
import BasicForm from './components/BasicForm/BasicForm';
import React, { useState } from 'react';
import Generations from './components/Generations/Generations';
import NavBar from './components/NavBar/NavBar';
import Navigations from './components/Navigation/Navigations';
import Footer from './components/Footer/Footer';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  const [opendet, setOpenDet] = useState(false)
  const [userDetail, setUserDetail]=useState({firstName:'', lastName:''})
  
  const copyGenerated = () => {
    const textarea = document.querySelector('#generatedText');
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      console.log('Text copied to clipboard');
    }
    setOpenDet(!opendet)
  };
  const toggleOpenDet = () => {
    setOpenDet(!opendet);
  };
  return (
    <div className="App">
      {
        opendet && 
        <div className='blur'>
          <UserDetail onSendGeneration={toggleOpenDet}/>
        </div>
      }
      <NavBar />
      <div className='user-content'>
        <div className='user-nav'><Navigations/></div>
        <div className='user-gen'>
          <Generations/>
          <div className='btn-div'>
          <button className='Navi-gen-btn laptop' onClick={copyGenerated}>Copy</button>
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
