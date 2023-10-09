import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigation = useNavigate();
  return (
    <div className='header-container'>
        <div className='header-left'>
          <h2 className='header-left-title'>Sri Murugan Cafe</h2>
          <h6 className='header-left-sub-title'>73, Muttu Street, KUMBAKONAM - 612 001.</h6>
        </div>
        <div className='header-center'>
          <p className='header-center-title'>LODGE BOOKING REGISTER</p>
        </div>
        <div className='header-right'>
          <button 
            className='header-right-button1'
            onClick={() => navigation('/')}
            >CheckIn
          </button>
          <button 
            className='header-right-button2'
            onClick={() => navigation('/checkOut')}
            >CheckOut
          </button>
          <img 
            alt="profile"
            className="header-right-profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKgEHACtKZYHAVGOMOpc-jfXUAUfcaKmFJQ&usqp=CAU"
          />
          {/* <button className='header-right-button3'>Add Customer</button> */}
        </div>
    </div>
  )
}
