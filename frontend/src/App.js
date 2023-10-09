import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import CheckIn from './Pages/CheckIn/CheckIn';
import CheckOut from './Pages/CheckOut/CheckOut';
import AddCheckOut from './Pages/AddCheckOut/AddCheckOut';
import AddCheckIn from './Pages/AddCheckIn/AddCheckIn';
import UpdateCheckIn from './Pages/UpdateCheckIn/UpdateCheckIn';
import UpdateCheckOut from './Pages/UpdateCheckOut/UpdateCheckOut';

function App() {
  return (
    <div className="App">
        <div className='app-header'>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<CheckIn />}/>
          <Route path='/checkIn/add-checkIn' element={<AddCheckIn />}/>
          <Route path='/checkIn/:id' element={ <UpdateCheckIn />}/>
          <Route path='/checkOut' element={ <CheckOut />}/>
          <Route path='/checkOut/add-checkOut' element={ <AddCheckOut />}/>
          <Route path='/checkOut/:id' element={ <UpdateCheckOut />}/>
        </Routes>
    </div>
  );
}

export default App;
