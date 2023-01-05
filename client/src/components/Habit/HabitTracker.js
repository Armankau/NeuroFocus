import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Habit.css"
import Habit from "./Habit";

function HabitTracker({me, handleScoreToDo, setMe}){

    const [habits, setHabits] = useState([])

    useEffect(() => {
        fetch("/habits")
        .then((resp) => resp.json())
        .then((info) => setHabits(info))
      },[])
   
    return(
        <div className="habitPage">
            <Navbar />
            {/* <Score me={me}/> */}
            <Habit habits={habits} me={me} setHabits={setHabits} handleScoreToDo={handleScoreToDo} setMe={setMe}/>
        </div>
    )
}

export default HabitTracker;