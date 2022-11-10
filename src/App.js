import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import DashboardUser from './pages/DashboardUser';


function App() {
  return (
    <Routes >
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={ <DashboardUser /> } />
    </Routes>
  );
}

export default App;
