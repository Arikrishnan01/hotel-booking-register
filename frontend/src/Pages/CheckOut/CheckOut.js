import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_URL } from '../../Config/Global';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function CheckIn() {
  const navigate = useNavigate();
  const [checkOut, setCheckOut ] = useState([]);
  const getCheckIn = () => {
    fetch(`${GLOBAL_URL}/checkOut/allCheckOut`,{
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => setCheckOut(data.data))
  }

  useEffect(() => {
    getCheckIn()
  });

  return (
    <div className='checkIn-container'>
      <div className='checkIn-top'>
        <p className="checkIn-title">CheckOut Customers List</p>
        <button 
          className='checkIn-button'
          onClick={() => navigate('/checkOut/add-checkOut')}
        >add checkOut</button>
      </div>
      <div class="table-responsive checkIn-bottom">
        <table class="table table-striped table-bordered table-hover table-container">
          <thead>
            <tr>
              <th>RegisterNo</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>RoomNO</th>
              <th>Bill Amount</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                  checkOut.length > 0 && 
                  checkOut.map((checkOutData) => (
                    <tr key={checkOutData.id}>
                      <td>{checkOutData.registerNo}</td>
                      <td>{checkOutData.name}</td>
                      <td>{checkOutData.date}</td>
                      <td>{checkOutData.time}</td>
                      <td>{checkOutData.roomNo}</td>
                      <td>{checkOutData.billAmount}</td>
                      <td>
                        <button
                          className="checkInUpdateBtn"
                          onClick={() => navigate(`/checkOut/${checkOutData._id}`)}  
                        >Update</button>
                    </td>
                    <td>
                  <button
                    className="checkInDeleteBtn"
                    onClick={() => {
                      fetch(`${GLOBAL_URL}/checkOut/${checkOutData._id}` , {
                        method: "DELETE"
                      })
                      .then((res) => alert(res.status))
                      navigate('/checkOut')
                    }}  
                  >
                    <DeleteOutlineIcon />
                  </button>
                </td>
                    </tr>
                  ))
              }
          </tbody>
        </table>
      </div>
       {/* registerNo ,
        name ,
        date ,
        time ,
        roomNo ,
        billAmount */}
    </div>
  )
}


