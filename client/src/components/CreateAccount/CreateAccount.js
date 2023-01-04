import React, { useDebugValue, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css"

function CreateAccount(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [sex, setSex] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password, sex, age, name, email, image
            }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
    }

    function backToLogin(){
      navigate("/login")
    }
    return(
      <div className="account-form-container">
        <form className="account-form" onSubmit={handleSubmit}>
          <h1 className="accountHeader">Create an Account:</h1>
            <label htmlFor="username"></label>
            <input
            placeholder="Enter your username..."
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password"></label>
            <input
            type="password"
            id="password"
            placeholder="Enter your password..."

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="email"></label>
            <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter your email..."

            onChange={(e) => setEmail(e.target.value)}
            />
             <label htmlFor="age"></label>
            <input
            type="text"
            id="age"
            value={age}
            placeholder="Enter your age..."

            onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="image"></label>
            <input
            type="text"
            placeholder="Enter your image address..."

            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
             <label htmlFor="sex"></label>
            <input
            type="text"
            placeholder="Enter your sex..."
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            />
             <label htmlFor="name"></label>
            <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name..."

            onChange={(e) => setName(e.target.value)}
            />
            <button className="account_buttons" type="submit">Create an account</button>
            <button className="account_buttons" onClick={backToLogin}>Go back to login</button>
          </form>
      </div>
    )
}

export default CreateAccount;