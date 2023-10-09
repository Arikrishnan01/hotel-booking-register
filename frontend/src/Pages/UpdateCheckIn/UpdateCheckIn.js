import React, { useEffect, useState } from 'react';
import './UpdateCheckIn.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GLOBAL_URL } from '../../Config/Global';
let initialObject = {
        registerNo: "" ,
        name: "" ,
        city: "" ,
        district: "" ,
        state: "" ,
        pincode: "" ,
        phone: "" ,
        date: "" ,
        time: "" ,
        commingFrom: "" ,
        purpose: "" ,
        durationOfStay: "" ,
        age: "" ,
        male: "" ,
        female: "" ,
        children: "" ,
        roomNo: "" ,
        advance: ""
}

export default function UpdateCheckIn() {
  const navigate = useNavigate();
  const { id } = useParams();
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
  const [form, setForm ] = useState(initialObject);
  const inputHandler = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value})
  }

  const getCheckInById = () => {
        fetch(`${GLOBAL_URL}/checkIn/${id}`,{
                method: "GET"
            })
            .then((data) => data.json())
            .then((checkIn) => {
                console.log(checkIn.data)
                setForm(checkIn.data);
                setRegisterNo(checkIn.registerNo);
                setName(checkIn.name);
                setCity(checkIn.city);
                setDistrict(checkIn.district);
                setState(checkIn.state);
                setPincode(checkIn.pincode);
                setPhone(checkIn.phone);
                setDate(checkIn.date);
                setTime(checkIn.time);
                setCommingFrom(checkIn.commingFrom);
                setPurpose(checkIn.purpose);
                setDurationOfStay(checkIn.durationOfStay);
                setAge(checkIn.age);
                setMale(checkIn.male);
                setFemale(checkIn.female);
                setChildren(checkIn.children);
                setRoomNo(checkIn.roomNo);
                setAdvance(checkIn.advance);
            })
  }
//   getCheckInById();

  useEffect(() => {
    getCheckInById()
  },[]);


  return (
    <div>
        <div className="topBackContaier">
                <button 
                    className="backButton"
                    onClick={() => navigate('/')}
                >Back</button>
                <h3 className="newUserTitle">UPDATE EXISTS CHECKIN</h3>
            </div>
        <div className="checkIn-Form">
            <div className='checkIn-items'>
              <label>RegisterNo</label>
              <input
                name="registerNo" 
                type='number'
                className="checkInInputField"
                value={form.registerNo}
                onChange={e => inputHandler(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Name</label>
              <input
                name="name"
                type='text' 
                className="checkInInputField"
                value={form.name}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>City</label>
              <input
                name="city"
                type='text' 
                className="checkInInputField"
                value={form.city}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>District</label>
              <input
                name="district" 
                type='text'
                className="checkInInputField"
                value={form.district}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>State</label>
              <input
                name="state"
                type='text' 
                className="checkInInputField"
                value={form.state}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Pincode</label>
              <input
                name="pincode"
                type='text' 
                className="checkInInputField"
                value={form.pincode}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Phone</label>
              <input
                name="phone"
                type='text' 
                className="checkInInputField"
                value={form.phone}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Date</label>
              <input
                name="date"
                type='text' 
                className="checkInInputField"
                value={form.date}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Time</label>
              <input
                name="time"
                type='text' 
                className="checkInInputField"
                value={form.time}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>CommingFrom</label>
              <input
                name="commingFrom" 
                type='text'
                className="checkInInputField"
                value={form.commingFrom}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Purpose</label>
              <input
                name="purpose"
                type='text' 
                className="checkInInputField"
                value={form.purpose}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>DurationOfStay</label>
              <input
                name="durationOfStay"
                type='number' 
                className="checkInInputField"
                value={form.durationOfStay} 
                onChange={e => setForm(e)} 
              />
            </div>
            <div className='checkIn-items'>
              <label>age</label>
              <input
                name="age" 
                type='number'
                className="checkInInputField"
                value={form.age}
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Male</label>
              <input
                name="male" 
                type='number'
                className="checkInInputField"
                value={form.male} 
                onChange={e => setForm(e)} 
              />
            </div>
            <div className='checkIn-items'>
              <label>Female</label>
              <input
                name="female"
                type='number' 
                className="checkInInputField"
                value={form.female}
                onChange={e => setForm(e)} 
              />
            </div>
            <div className='checkIn-items'>
              <label>Children</label>
              <input
                name="children" 
                type='number'
                className="checkInInputField" 
                value={form.children} 
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>RoomNo</label>
              <input
                name="roomNo"
                type='number' 
                className="checkInInputField" 
                value={form.roomNo} 
                onChange={e => setForm(e)}
              />
            </div>
            <div className='checkIn-items'>
              <label>Advance</label>
              <input
                name="advance"
                type='number' 
                className="checkInInputField"
                value={form.advance}
                onChange={e => setForm(e)}
              />
            </div>
            <button 
                    className="addCheckInButtonBottom"
                    onClick={() => {
                        const updateCheckIn = {
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
                        fetch(`${GLOBAL_URL}/checkIn/${id}`, {
                            method: "PUT",
                            body: JSON.stringify(updateCheckIn),
                            headers: {
                                "Content-type": "application/json",
                            }
                        })
                        .then((data) => data.json)
                        navigate('/')
                     }}          
                >Update CheckIn</button>
          </div>

    </div>
  )
}
