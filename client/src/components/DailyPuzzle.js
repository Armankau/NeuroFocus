import Navbar from "./Navbar/Navbar";
import React from "react";
import Score from "./ToDo/Score";

function DailyPuzzle({me}){
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1>Puzzles</h1>
        </>
    )
}
export default DailyPuzzle;