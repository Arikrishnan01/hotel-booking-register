import React, { useEffect, useState } from 'react';
import './UpdateCheckOut.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GLOBAL_URL } from '../../Config/Global';

export default function UpdateCheckIn() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ registerNo, setRegisterNo ] = useState("");
  const [ name, setName ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");
  const [ roomNo, setRoomNo ] = useState("");
  const [ billAmount, setBillAmount ] = useState("");

  const getCheckOutById = () => {
        fetch(`${GLOBAL_URL}/checkOut/${id}`,{
                method: "GET"
            })
            .then((data) => data.json())
            .then((checkOut) => {
                console.log(checkOut.data)
                setRegisterNo(checkOut.data.registerNo);
                setName(checkOut.data.name);
                setDate(checkOut.data.date);
                setTime(checkOut.data.time);
                setRoomNo(checkOut.data.roomNo);
                setBillAmount(checkOut.data.billAmount);
            })
  }
//   getCheckInById();

  useEffect(() => {
    getCheckOutById()
  });


  return (
    <div>
        <div className="topBackContaier">
                <button 
                    className="backButton"
                    onClick={() => navigate('/checkOut')}
                >Back</button>
                <h3 className="newUserTitle">UPDATE EXISTS CHECKOUT</h3>
            </div>
        <div className="checkIn-Form">
            <div className='checkIn-items'>
              <label>RegisterNo</label>
              <input 
                type='number'
                className="checkInInputField"
                value={registerNo}
                onChange={e => setRegisterNo(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Name</label>
              <input
                type='text' 
                className="checkInInputField"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Date</label>
              <input
                type='text' 
                className="checkInInputField"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Time</label>
              <input
                type='text' 
                className="checkInInputField"
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>RoomNo</label>
              <input
                type='number' 
                className="checkInInputField" 
                value={roomNo} 
                onChange={e => setRoomNo(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Bill Amount</label>
              <input
                type='number' 
                className="checkInInputField"
                value={billAmount}
                onChange={e => setBillAmount(e.target.value)}
              />
            </div>
            <button 
                    className="addCheckInButtonBottom"
                    onClick={() => {
                        const updateCheckOut = {
                            registerNo ,
                            name ,
                            date ,
                            time ,
                            roomNo ,
                            billAmount
                        }
                        fetch(`${GLOBAL_URL}/checkOut/${id}`, {
                            method: "PUT",
                            body: JSON.stringify(updateCheckOut),
                            headers: {
                                "Content-type": "application/json",
                            }
                        })
                        .then((data) => data.json)
                        navigate('/checkOut')
                     }}          
                >Update CheckOut</button>
          </div>

    </div>
  )
}
