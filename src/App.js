import './App.css';
import React, { useState } from 'react';
import Generations from './components/Generations/Generations';
import NavBar from './components/NavBar/NavBar';
import Navigations from './components/Navigation/Navigations';
import Footer from './components/Footer/Footer';
import UserDetail from './components/UserDetail/UserDetail';
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';
import { ToastContainer,toast } from 'react-toastify';

function App() {
  const [opendet, setOpenDet] = useState(false)
  const [loader,setLoader] = useState(false)

  const setLoading = (value) =>{
    setLoader(value)
  }
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
    navigator.clipboard.writeText(data['message']).then(() => 
    {
      toast.success('Description copied to clipboard and mailed Successfully !', {
        position: "top-right",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        
        });
    }
    )
   // console.log("copied"+data['message'])
    
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
        <div className='user-nav'><Navigations onLoadingSpinnerSet={setLoading}/></div>
        <div className='user-gen'>
          {loader && <Spinner />}
          {!loader && <Generations/>}
          <div className='btn-div'>
          <button className='Navi-gen-btn laptop' onClick={toggleOpenDet}>Copy</button>
          <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              /><ToastContainer />
          </div>
          </div>
          
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
