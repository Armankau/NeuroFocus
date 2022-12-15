import React, { useEffect, useState } from "react"
import Navbar from "./Navbar/Navbar"
import Score from "./ToDo/Score";

function Calendar({me}){
   
    return(
        <>
            <Navbar />
            <Score me={me}/>
            <h1>Calendar Page</h1>
        </>
        
    )
}

export default Calendar;