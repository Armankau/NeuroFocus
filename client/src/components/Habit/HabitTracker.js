import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Score from "../Score/Score";
import "./Habit.css"
import Habit from "./Habit";

function HabitTracker({me, handleScoreToDo}){

    const [habits, setHabits] = useState([])

    useEffect(() => {
        fetch("/habits")
        .then((resp) => resp.json())
        .then((info) => setHabits(info))
      },[])

   
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1 className="header" >Habits</h1>
            <Habit habits={habits} me={me} setHabits={setHabits} handleScoreToDo={handleScoreToDo}/>
        </>
    )
}

export default HabitTracker;