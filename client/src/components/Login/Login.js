import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    function handlSubmit(e){
        e.preventDefault()
        const formData = {
            username: username, 
            password: password
        }
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then(navigate("/"));
        }

        
    function handleAccount(){
        navigate("/create_account")
    }

    return (
        <div className="loginBody">
            <h1 className="loginHeader">Welcome to NeuroFocus</h1>
        <div className="login-div">
            <form  className="form" onSubmit={handlSubmit}>
                <input 
                    id="username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="username"/>
                <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <input 
                type="submit"
                value="Login"
                className="login_buttons"
                
                />
                <h4>Or Register Below!</h4>
                <button onClick={handleAccount} className="login_buttons">Register Account</button>
            </form>
        </div>
        </div>

    )
}

export default Login;