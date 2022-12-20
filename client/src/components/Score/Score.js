import React, { useEffect, useState } from "react"
import "./Score.css"

function Score({me}){
    return (
        <h3 className="score">Total Puzzles Solved: {me.score}</h3>
    )
}

// score doesn't update until refresh, basically issue with updating on the front end

export default Score;