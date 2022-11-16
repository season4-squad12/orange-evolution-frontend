import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import DashboardUser from './Components/DashboardUser';
import MenuTrails from './Components/MenuTrail/MenuTrail';
import ContentScreen from './Components/ContentScreen';
import { SelectTrail } from './Components/SelectTrail';
import DashboardAdmin from './Components/DashboardAdmin';
import Management from './Components/Management';
import FeedbackAdmin from './Components/FeedbackAdmin';

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/registrar' element={<Register />}/>
      <Route path='/trilhas' element={ <MenuTrails />} />
      <Route path='/conteudo' element={ <ContentScreen /> } />
      <Route path="selecionar-trilha" element={<SelectTrail />} />
      <Route path='/perfil' element={ <DashboardUser />} />
      <Route path='/dashboard' element={<DashboardAdmin />} />
      <Route path='/gerenciamento' element={<Management />} />
      <Route path='/feedbacks' element={<FeedbackAdmin />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
