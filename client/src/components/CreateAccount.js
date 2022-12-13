import React, { useDebugValue, useState } from "react";


function CreateAccount(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [sex, setSex] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password, sex, age, name, email
            }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
    }

    function backToLogin(){
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
             <label htmlFor="email">Age:</label>
            <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
             <label htmlFor="sex">Sex:</label>
            <input
            type="text"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            />
             <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Create Account</button>
            <h1>OR</h1>
            <button onClick={backToLogin}>Back to Login</button>
      </form>
    )
}

export default CreateAccount;