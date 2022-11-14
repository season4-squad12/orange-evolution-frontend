import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import DashboardUser from './Components/DashboardUser';
import MenuTrails from './Components/MenuTrail/MenuTrail';
import { SelectTrail } from './Components/SelectTrail';
import DashboardAdmin from './Components/DashboardAdmin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registrar' element={<Register />}/>
      <Route path='/trilhas' element={ <MenuTrails />} />
      <Route path='/perfil' element={ <DashboardUser />} />
      <Route path="selecionar-trilha" element={<SelectTrail />} />
      <Route path='dashboard' element={<DashboardAdmin />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
