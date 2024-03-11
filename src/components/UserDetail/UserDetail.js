import React from 'react';
import '../UserDetail/UserDetail.css';
import { IoClose } from "react-icons/io5";
import { useForm } from 'react-hook-form';


function UserDetail({ onSendGeneration, onCloseButton }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
    const handleSendGeneration = (data) => {
      //console.log(data)
       
        onSendGeneration(data);
    };

    const closeModal = () => {
        onCloseButton();
    };

    return (
        <div className="userdetail-container">
            <h2 classname="ud-text">Get Your Descriptions Mailed for Free!</h2>
            <form onSubmit={handleSubmit(handleSendGeneration)}>
                <i className="udclose"><IoClose onClick={closeModal} size="45px"/></i>
                <div className="ud-parent">
                    <input required {...register("firstname")} className="firstname namebox" type='text' placeholder='First Name'/>
                    <input required {...register("lastname")} className="lastname namebox" type='text' placeholder='Last Name'/>
        
                    <input {...register("email")} className='emailbox' type="email" placeholder='Enter email'/>
                </div>
                <div className='ud-btn'>
                <input  className='send-btn' type='submit' value='Send Description'/>
                </div>
            </form>
        </div>
    );
}

export default UserDetail;
