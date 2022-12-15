import React, { useEffect, useState } from "react"

function Score({me}){

    return (
        <h3>Total Score: {me.score}</h3>
    )
}

export default Score;