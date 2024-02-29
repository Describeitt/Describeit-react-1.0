import './App.css';
import BasicForm from './components/BasicForm/BasicForm';
import React, { useState } from 'react';
import Generations from './components/Generations/Generations';
import NavBar from './components/NavBar/NavBar';
import Navigations from './components/Navigation/Navigations';
import Footer from './components/Footer/Footer';
import UserDetail from './components/UserDetail/UserDetail';
import { IoClose } from "react-icons/io5";
import axios from 'axios';

function App() {
  const [opendet, setOpenDet] = useState(false)
  const [userDetail, setUserDetail]=useState({firstName:'', lastName:''})
  
  const sendMail = async (data) =>{
    //console.log(data)
    try {
      const response = await axios.post('https://describeitt.onrender.com/api/mailer/', data);
      console.log(response.data); // Assuming the response is "ok"
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const copyGenerated = (data) => {
    const textarea = document.querySelector('#generatedText');
    var prompts;
    if (textarea) {
      prompts=textarea.value;
      textarea.select();
      document.execCommand('copy');
      data['message']=prompts
      sendMail(data)
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
          <UserDetail onSendGeneration={copyGenerated} onCloseButton={toggleOpenDet}/>
        </div>
      }
      <NavBar />
      <div className='user-content'>
        <div className='user-nav'><Navigations/></div>
        <div className='user-gen'>
          <Generations/>
          <div className='btn-div'>
          <button className='Navi-gen-btn laptop' onClick={toggleOpenDet}>Copy</button>
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
