import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
 import Register from './Components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, {useState} from 'react';

const App =()=> {

   const [user, setLoginUser]=useState({})
  return (
    <div className='App'>
    <Router>
       <Routes>
        <Route exact path="/" element=
          {
          user && user._id ? <Home /> : <Login setLoginUser={setLoginUser} />   
        }  
        />
        
  
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/> 
        <Route path="/register" element={<Register/>} />

       </Routes>
    </Router>
     
        
     
   </div>
  );
}

export default App;
