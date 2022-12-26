import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    const [me, setMe] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/me")
        .then((resp) => resp.json())
        .then((info) => setMe(info))
      },[])

    function handleCalendar(){
        navigate("/")
    }

    function handleDo(){
        navigate("/to_do")
    }

    function handlePuzzle(){
        navigate("/daily_puzzle")
    }

    function handleHabit(){
        navigate("/habit_tracker")
    }

    function handleProfile(){
        if (me.error){
            navigate("/login")
        }
        else{
            navigate("/profile")
        }
    }

    function logout(){
        fetch("/logout", {
        method: "DELETE",
        }).then((data) => onLogout(data));
    }
  
  function onLogout(data){
    navigate("/login")
  }

    
    return(
    <div className="navbar">
        <p onClick={handleCalendar}>Calendar</p>
        <p onClick={handleDo}>To Do</p>
        <p onClick={handlePuzzle}>Daily Puzzle</p>
        <p onClick={handleHabit}>Habit Tracker</p>
        <p onClick={handleProfile}>Profile</p>
        <p onClick={logout}>Logout</p>
        <br></br>
    </div>
    )
}

export default Navbar;