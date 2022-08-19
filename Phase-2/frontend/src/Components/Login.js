import axios from 'axios';
import React , {useState} from 'react';
import  "./Login.css";
import {useNavigate, Link} from "react-router-dom";


const Login = ({setLoginUser}) =>{

  const navigate=useNavigate()
  const[user, setUser]=useState({
    email:"",
    password:""
});

const handleChange =(event) =>{
    // const {name, value} =event.target;
    setUser({
        ...user,
        [event.target.name]:event.target.value
    })
}

const login=()=>{
  axios.post('http://localhost:3001/login', user)
  .then(res =>{
    alert(res.data.message)
    setLoginUser(res.data.user)
    navigate('/')
  })
}
    return (
       < div className='login'>
       <h1>Login</h1>
        <input type='text' name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
        <input type='password' name="password" value={user.password} placeholder='Enter your Password'  onChange={handleChange}></input>
        <div className='submit' onClick={login}>Login</div>
        <div id="block-container">
        <div className='member' onClick={()=>navigate("/register")}>Don't have an account? <Link to="/register">register</Link></div>
      <div className='forgot' onClick={()=>navigate("/forgot")}> <Link to="/forgot">Forgot Password?</Link></div>

      </div>
       </div>
    );
}

export default Login;