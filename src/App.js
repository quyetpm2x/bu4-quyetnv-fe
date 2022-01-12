import Login from "./components/auth/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoute from './components/routing/protectedRoute';
import Landing from './components/layout/landing';
import Home from "./components/home";
import { useState } from "react";
import VerifyPage from "./components/verify";
import Register from './components/auth/register';
import Profile from './components/profile';
import Degree from './components/degree';

function App() {
  const [wallet, setWallet] = useState('');
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}  exact/>
          <Route path='/home' element={<Home wallet={wallet} setWallet={setWallet} />} exact/>
          <Route path='/verify' element={<VerifyPage />} exact/>
          <Route path='/login' element={<Login />} exact/>
          <Route path='/register' element={<Register />} exact/>
          <Route path='/profile' element={<Profile />} exact/>
          <Route path='/degree' element={<Degree />} exact/>

        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
