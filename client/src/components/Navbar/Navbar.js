import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    const navigate = useNavigate()

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
        navigate("/profile")
    }

    function logout(){
        fetch("/logout", {
        method: "DELETE",
        }).then(navigate("/login"));
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