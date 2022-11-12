import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { DashboardUser } from './pages/DashboardUser';
import Login from './Components/Login';


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
