import React, { useEffect, useState } from "react"
import "./Score.css"

function Score({me}){

    return (
        <h3 className="score">Total Score: {me.score}</h3>
    )
}

export default Score;