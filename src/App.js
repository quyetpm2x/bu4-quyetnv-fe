import Login from "./components/auth/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoute from './components/routing/protectedRoute';
import Landing from './components/layout/landing';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}  exact/>
          <Route path='/home' element={<ProtectedRoute />} exact/>
          <Route path='/login' element={<Login />} exact/>
          <Route path='/register' element={<Login />} exact/>

        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
