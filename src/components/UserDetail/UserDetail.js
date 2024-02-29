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
            <form onSubmit={handleSubmit(handleSendGeneration)}>
                <i className="udclose"><IoClose onClick={closeModal} size="45px"/></i>
                <div className="names">
                    <input required {...register("firstname")} className="namebox" type='text' placeholder='First Name'/>
                    <input required {...register("lastname")}className="namebox" type='text' placeholder='Last Name'/>
                </div>
                <div required className='email-div'><input {...register("email")} className='emailbox' type="email" placeholder='Enter email'/></div>
                <input  className='send-btn' type='submit' value='Send Generation'/>
            </form>
        </div>
    );
}

export default UserDetail;
