import React, { useEffect, useState } from 'react';
import './CheckIn.css';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_URL } from '../../Config/Global';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function CheckIn() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn ] = useState([]);
  const getCheckIn = () => {
    fetch(`${GLOBAL_URL}/checkIn/allCheckIn`,{
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => setCheckIn(data.data))
  }

  useEffect(() => {
    getCheckIn()
  }, []);

  return (
    <div className='checkIn-container'>
      <div className='checkIn-top'>
        <p className="checkIn-title">CheckIn Customers List</p>
        <button 
          className='checkIn-button'
          onClick={() => navigate('/checkIn/add-checkIn')}
        >add checkIn</button>
      </div>
      <div class="table-responsive checkIn-bottom">
        <table class="table table-striped table-bordered table-hover table-container">
          <thead>
            <tr>
              <th>RegisterNo</th>
              <th>Name</th>
              <th>City</th>
              <th>District</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>CommingFrom</th>
              <th>Purpose</th>
              <th>DurationOfStay</th>
              <th>Age</th>
              <th>Male</th>
              <th>Female</th>
              <th>Children</th>
              <th>RoomNO</th>
              <th>Advance</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                  checkIn.length > 0 && 
                  checkIn.map((checkInData) => (
                    <tr key={checkIn.id}>
                      <td>{checkInData.registerNo}</td>
                      <td>{checkInData.name}</td>
                      <td>{checkInData.city}</td>
                      <td>{checkInData.district}</td>
                      <td>{checkInData.state}</td>
                      <td>{checkInData.pincode}</td>
                      <td>{checkInData.phone}</td>
                      <td>{checkInData.date}</td>
                      <td>{checkInData.time}</td>
                      <td>{checkInData.commingFrom}</td>
                      <td>{checkInData.purpose}</td>
                      <td>{checkInData.durationOfStay}</td>
                      <td>{checkInData.age}</td>
                      <td>{checkInData.male}</td>
                      <td>{checkInData.female}</td>
                      <td>{checkInData.children}</td>
                      <td>{checkInData.roomNo}</td>
                      <td>{checkInData.advance}</td>
                      <td>
                        <button
                          className="checkInUpdateBtn"
                          onClick={() => navigate(`/checkIn/${checkInData._id}`)}  
                        >Update</button>
                    </td>
                    <td>
                  <button
                    className="checkInDeleteBtn"
                    onClick={() => {
                      fetch(`${GLOBAL_URL}/checkIn/${checkInData._id}` , {
                        method: "DELETE"
                      })
                      .then((res) => alert(res.status))
                      // .then(() => navigate('/teams'))
                      navigate('/')
                    }}  
                  >
                    <DeleteOutlineIcon />
                    {/* <FontAwesomeIcon icon={faTrash} /> */}
                  </button>
                </td>
                    </tr>
                  ))
              }
          </tbody>
        </table>
      </div>
       {/*  registerNo ,
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
        advance  */}
    </div>
  )
}


