import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Admin from './pages/Admin';
import UserList from './pages/UserList'
import { useState } from 'react';
function App() {
  const [isAuthAdmin, setIsAuthAdmin] = useState(false)
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/*' element={<Error />} />
        <Route path='/Profile/:id' element={<Profile />} />

        <Route path='/UserList' element={<UserList />} />

        {isAuthAdmin ? <Route path='/Admin' element={<Admin />} /> : null}

      </Routes>


    
    </div>
  );
}

export default App;
