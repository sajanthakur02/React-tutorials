import React, {useState} from "react";

const SignUp = () => {

    // to ready state
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const collectData = () => {
        console.warn(name, email, password)
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