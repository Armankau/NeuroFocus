import Navbar from "./Navbar/Navbar";
import React from "react";
import Score from "./Score/Score";

function HabitTracker({me}){
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1>Habits</h1>
        </>
    )
}

export default HabitTracker;