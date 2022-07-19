import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { useMemo, useState } from 'react';
import { UserContext } from './UserContext';
import Plan from './pages/Plan';
import Bienvenida from './pages/Bienvenida';

function App() {

  const [user, setUser] = useState({
    name: "",
    document: "",
    phone: "",
    placa: "",
    monto: 20.00,
    mail: ""
  })

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <BrowserRouter>
      <UserContext.Provider value={value} >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/arma-tu-plan' element={<Plan />} />
          <Route path='/bienvenida' element={<Bienvenida />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
