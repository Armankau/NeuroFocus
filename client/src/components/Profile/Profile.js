import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Profile.css"
function Profile({me, setMe}){
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [sex, setSex] = useState()


    function handleUsername(e) {
        e.preventDefault()
        fetch(`/me/${me.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username: username}),
        })
          .then((r) => r.json())
          .then((data) => setMe(data));
      }

      console.log(me)

    function handleName(e) {
        e.preventDefault()
        fetch(`/me/${me.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name: name}),
        })
          .then((r) => r.json())
          .then((data) => setMe(data));
    }

    function handleAge(e) {
        e.preventDefault()
        fetch(`/me/${me.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({age: age}),
        })
          .then((r) => r.json())
          .then((data) => setMe(data));
    }

    function handleSex(e) {
        e.preventDefault()
        fetch(`/me/${me.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({sex: sex}),
        })
          .then((r) => r.json())
          .then((data) => setMe(data));
    }

    return(
        <>
            <Navbar />
            <div className="page">
            <h1 className="header">Your Profile</h1>
            <div className="profileContainer">
                <div className="profileInformation">
                    <h2>Personal Information</h2>
                    <img className="profileImage" src={me.image}/>
                    <p className="info">Username: {me.username}
                    <form className="formProfile" onSubmit={handleUsername}>
                        <input 
                        type="text" placeholder="Enter New Username..."
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        />
                        <input 
                        type="submit"
                        value="Change Username" 
                        className="profileBtn"
                        />
                    </form>
                     </p>
                    <p className="info">Name: {me.name} 
                    <form className="formProfile" onSubmit={handleName}>
                        <input 
                        type="text" placeholder="Enter New Name..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                        <input 
                        type="submit" 
                        value="Change Name"
                        className="profileBtn"
                        />
                    </form>
                    </p>
                    <p className="info">Age: {me.age}
                    <form className="formProfile" onSubmit={handleAge}>
                        <input 
                        type="text" placeholder="Enter New Age..."
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        />
                        <input 
                        type="submit"
                        value="Change Age" 
                        className="profileBtn"
                        />
                    </form> 
                    </p>
                    <p className="info">Sex: {me.sex} 
                    <form className="formProfile" onSubmit={handleSex}>
                        <input 
                        type="text" placeholder="Enter New Age..."
                        onChange={(e) => setSex(e.target.value)}
                        value={sex}
                        />
                        <input 
                        type="submit"
                        value="Change Age" 
                        className="profileBtn"
                        />
                    </form>
                    </p>
                </div>
            </div>
            <div className="profileScores">
                <h2>Your Scores</h2>
                <h3>Total Puzzles Solved: {me.score}</h3>
                <h3>Total Tasks Completed: {me.task_score}</h3>
                <h3>Total Habits Completed: {me.habit_score}</h3>
            </div>
            </div>
        </>
    )
}

export default Profile;