import React, {useState} from 'react';
import "./Register.css";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const Register= () =>{

    const navigate=useNavigate()
    const[user, setUser]=useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword:""
    });

    const handleChange =(event) =>{
        // const {name, value} =event.target;
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    const register =() =>{
        const {name, email, password, reEnterPassword}=user
         if(name && email && password && password===reEnterPassword){
           axios.post('http://localhost:3001/register', user)
           .then(res =>
            {alert(res.data.message)
                navigate('/login')
            })

            }else{
                alert('invalid details');
            }
         }
   
    


    return (

        <div className='register'>
        {console.log('user',user)}
          <h1>Register</h1>
         <input type='text' name="name" value={user.name} placeholder='Enter your Name' onChange={handleChange}></input>
         <input type='text' name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
         <input type='password' name="password" value={user.password} placeholder='Enter your Password'  onChange={handleChange}></input>
         <input type='password' name="reEnterPassword" value= {user.reEnterPassword} placeholder='Re-enter Password'  onChange={handleChange}></input>
         <div className='submit' onClick={register}>Register</div>
         <div className='login_account' onClick={()=>navigate("/login")}>Already have an account? <Link to="/login">Login</Link></div>
        </div>

    );
    }

export default Register;