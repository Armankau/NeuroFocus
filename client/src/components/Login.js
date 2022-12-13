import React, { useState } from "react";

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
            .then((data) => console.log(data));
        }

    return (
        <div>
            <form onSubmit={handlSubmit}>
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
                />

            </form>
        </div>
    )
}

export default Login;