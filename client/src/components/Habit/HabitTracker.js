import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Score from "../Score/Score";
import "./Habit.css"
import Habit from "./Habit";

function HabitTracker({me}){

    const [habits, setHabits] = useState([])

    useEffect(() => {
        fetch("/habits")
        .then((resp) => resp.json())
        .then((info) => setHabits(info))
      },[])
      console.log(habits)
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1 className="header" >Habits</h1>
            <Habit habits={habits} setHabits={setHabits}/>
        </>
    )
}

export default HabitTracker;