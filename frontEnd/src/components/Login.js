import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login =()=>{
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    }, [])
    const handleLogin= async()=>{
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email, password }),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result= await result.json();
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/')
        } else {
            alert('please enter correct detail')
        }
        console.log(result) 
    }
    return(
        <>
        <div className="login">
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className="inputBox" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button type="button" onClick={handleLogin} className="btn">Login</button>
        </div>
        </>
    )
}
export default Login;