import React, { useEffect, useState } from "react";

function Progress({habits}){

    const habitDone = habits.filter((habit) => habit.completed === 1).length
    const totalHabits = habits.length

    let width = (habitDone * 50) + 250
    let progress = Math.round((habitDone / totalHabits) * 100)


    return (
        <div className="progress">
=            <span>
                <div className={ progress > 50? "bar" : "noBar"}
                style={{ width:`${width}px`, height: `${25}px`}}
                tabIndex={0}>
                    Habits Completed Today: {progress}%
                </div>
            </span>
        </div>

    )
}

export default Progress;