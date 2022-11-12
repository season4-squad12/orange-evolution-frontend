import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import DashboardUser from './Components/DashboardUser';
import { SelectTrail } from './pages/SelectTrail';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registrar' element={<Register />}/>
      <Route path='/dashboard' element={ <DashboardUser />} />
      <Route path="selecionar-trilha" element={<SelectTrail />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
