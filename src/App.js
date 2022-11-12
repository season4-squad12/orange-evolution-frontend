import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { DashboardUser } from './pages/DashboardUser';
import Login from './Components/Login';
import Home from './Components/Home';


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registrar' element={<Register/>}/>
      <Route path='/dashboard' element={ <DashboardUser /> } />
    </Routes>
  );
}

export default App;
