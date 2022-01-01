import Home from "./components/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import Landing from './components/landing';
import ProtectedRoute from './components/routing/protectedRoute';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}  exact/>
          <Route path='/home' element={<ProtectedRoute />}  exact/>
          <Route path='/login' element={<Login />}  exact/>
          <Route path='/register' element={<Register />}  exact/>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
