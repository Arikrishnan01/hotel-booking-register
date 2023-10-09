import React, { useState } from 'react';
import './AddCheckIn.css';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_URL } from '../../Config/Global';

export default function AddCheckIn() {
  const navigate = useNavigate();
  const [ registerNo, setRegisterNo ] = useState("");
  const [ name, setName ] = useState("");
  const [ city, setCity ] = useState("");
  const [ district, setDistrict ] = useState("");
  const [ state, setState ] = useState("");
  const [ pincode, setPincode ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");
  const [ commingFrom, setCommingFrom ] = useState("");
  const [ purpose, setPurpose ] = useState("");
  const [ durationOfStay, setDurationOfStay ] = useState("");
  const [ age, setAge ] = useState("");
  const [ male, setMale ] = useState("");
  const [ female, setFemale ] = useState("");
  const [ children, setChildren ] = useState("");
  const [ roomNo, setRoomNo ] = useState("");
  const [ advance, setAdvance ] = useState("");

  const addCheckIn = () => {
    const addNewChechIn = {
            registerNo ,
            name ,
            city ,
            district ,
            state ,
            pincode ,
            phone ,
            date ,
            time ,
            commingFrom ,
            purpose ,
            durationOfStay ,
            age ,
            male ,
            female ,
            children ,
            roomNo ,
            advance
    }
    fetch(`${GLOBAL_URL}/checkIn/creatCheckIn`,{
            method: "POST",
            body: JSON.stringify(addNewChechIn),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((response) => response.json())
  }

  // useEffect(() => {
  //   addCheckIn()
  // },[]);

  return (
    <div>
        <div className="topBackContaier">
                <button 
                    className="backButton"
                    onClick={() => navigate('/')}
                >Back</button>
                <h3 className="newUserTitle">CREATE NEW CHECKIN</h3>
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
              <label>City</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the city'
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>District</label>
              <input 
                type='text'
                className="checkInInputField"
                placeholder='Enter the district'
                value={district}
                onChange={e => setDistrict(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>State</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the state'
                value={state}
                onChange={e => setState(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Pincode</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the pincode'
                value={pincode}
                onChange={e => setPincode(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Phone</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the phone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Date</label>
              <input
                type='date' 
                className="checkInInputField"
                placeholder='Enter the date'
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Time</label>
              <input
                type='time' 
                className="checkInInputField"
                placeholder='Enter the time'
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>CommingFrom</label>
              <input 
                type='text'
                className="checkInInputField"
                placeholder='Where are comming from'
                value={commingFrom}
                onChange={e => setCommingFrom(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Purpose</label>
              <input
                type='text' 
                className="checkInInputField"
                placeholder='Enter the purpose'
                value={purpose}
                onChange={e => setPurpose(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>DurationOfStay</label>
              <input
                type='number' 
                className="checkInInputField"
                placeholder='Enter the duration of stay'
                value={durationOfStay} 
                onChange={e => setDurationOfStay(e.target.value)} 
              />
            </div>
            <div className='checkIn-items'>
              <label>age</label>
              <input 
                type='number'
                className="checkInInputField"
                placeholder='Enter the age'
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Male</label>
              <input 
                type='number'
                className="checkInInputField"
                placeholder='Enter the count of male'
                value={male} 
                onChange={e => setMale(e.target.value)} 
              />
            </div>
            <div className='checkIn-items'>
              <label>Female</label>
              <input
                type='number' 
                className="checkInInputField"
                placeholder='Enter the count of female'
                value={female}
                onChange={e => setFemale(e.target.value)} 
              />
            </div>
            <div className='checkIn-items'>
              <label>Children</label>
              <input 
                type='number'
                className="checkInInputField"
                placeholder='Enter the count of chidren' 
                value={children} 
                onChange={e => setChildren(e.target.value)}
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
              <label>Advance</label>
              <input
                type='number' 
                className="checkInInputField"
                placeholder='Enter the advanced amount'
                value={advance}
                onChange={e => setAdvance(e.target.value)}
              />
            </div>
            <button 
                    className="addCheckInButtonBottom"
                     onClick={() => {
                        addCheckIn()
                        navigate('/')
                     }}          
                >Create CheckIn</button>
          </div>

    </div>
  )
}
