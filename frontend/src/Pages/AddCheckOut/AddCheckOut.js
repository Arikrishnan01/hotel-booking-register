import React, { useState } from 'react';
import './AddCheckOut.css';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_URL } from '../../Config/Global';

export default function AddCheckOut() {
  const navigate = useNavigate();
  const [ registerNo, setRegisterNo ] = useState("");
  const [ name, setName ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");
  const [ roomNo, setRoomNo ] = useState("");
  const [ billAmount, setBillAmount ] = useState("");

  const addCheckOut = () => {
    const addNewChechOut = {
            registerNo ,
            name ,
            date ,
            time ,
            roomNo ,
            billAmount
    }
    fetch(`${GLOBAL_URL}/checkOut/createCheckOut`,{
            method: "POST",
            body: JSON.stringify(addNewChechOut),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((response) => response.json())
  }


  return (
    <div>
        <div className="topBackContaier">
                <button 
                    className="backButton"
                    onClick={() => navigate(`/checkOut`)}
                >Back</button>
                <h3 className="newUserTitle">CREATE NEW CHECKOUT</h3>
            </div>
        <div className="checkIn-Form">
            <div className='checkIn-items'>
              <label>RegisterNo</label>
              <input 
                type='number'
                className="checkInInputField"
                placeholder='Enter the registerNo'
                value={registerNo}
                onChange={e => setRegisterNo(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Name</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className='checkIn-items'>
              <label>Date</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the date'
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Time</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the time'
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>

            <div className='checkIn-items'>
              <label>RoomNo</label>
              <input
                type='number' 
                className="checkInInputField"
                placeholder='Enter the room no' 
                value={roomNo} 
                onChange={e => setRoomNo(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Bill Amount</label>
              <input
                type='number' 
                className="checkInInputField"
                placeholder='Enter the bill amount'
                value={billAmount}
                onChange={e => setBillAmount(e.target.value)}
              />
            </div>
            <button 
                    className="addCheckInButtonBottom"
                     onClick={() => {
                        addCheckOut()
                        navigate(`/checkOut`)
                     }}          
                >Create checkOut</button>
          </div>

    </div>
  )
}
