import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import DashboardUser from './Components/DashboardUser';
import MenuTrails from './Components/MenuTrail/MenuTrail';


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registrar' element={<Register />}/>
      <Route path='/dashboard' element={ <DashboardUser />} />
      <Route path='/trails' element={ <MenuTrails />} />
    </Routes>
  );
}

export default App;
