import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
function Login({me, setMe}){

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
            .then((me) => {
                    setMe(me)
                    navigate("/")}
            )
        }

        
    function handleAccount(){
        navigate("/create_account")
    }

    return (
        <div className="loginBody">
        <div className="login-div">
        {/* <h2 className="loginHeader">Welcome to NeuroFocus</h2> */}

            <form  className="form" onSubmit={handlSubmit}>
            {/* <h2 className="loginHeader">Welcome to NeuroFocus...</h2> */}

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
                <button onClick={handleAccount} className="login_buttons">Register a new account</button>
            </form>
        </div>
        </div>

    )
}

export default Login;