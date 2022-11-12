import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import DashboardUser from './Components/DashboardUser';


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registrar' element={<Register />}/>
      <Route path='/dashboard' element={ <DashboardUser />} />
    </Routes>
  );
}

export default App;
