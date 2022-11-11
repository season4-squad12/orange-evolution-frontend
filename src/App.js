import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { DashboardUser } from './pages/DashboardUser';


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={ <DashboardUser /> } />
    </Routes>
  );
}

export default App;
