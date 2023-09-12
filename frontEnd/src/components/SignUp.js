import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'; //for redirection
const SignUp = () => {

    // to ready state
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
// for block the redirection 
    useEffect(() => {
        const auth= localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    }, [])
    const collectData = async() => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem('user', JSON.stringify(result));
        if(result) {
            navigate('/') //which path have to redirect enter it
        }
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <input type="text" className="inputBox" name="Name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
            <input type="text" className="inputBox" name="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input type="password" className="inputBox" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button type="button" onClick={collectData} className="btn">Sign Up</button>
        </div>
    )
}
export default SignUp;