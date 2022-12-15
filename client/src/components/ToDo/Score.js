import React, { useEffect, useState } from "react"

function Score({me}){

    return (
        <h1>Total Score: {me.score}</h1>
    )
}

export default Score;