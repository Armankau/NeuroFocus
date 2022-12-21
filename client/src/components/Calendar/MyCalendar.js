import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import Score from "../Score/Score";
import Calendar from 'react-calendar';
import "./Calendar.css"
import 'react-calendar/dist/Calendar.css';

function MyCalendar({me}){
    const [date, setDate] = useState(new Date());

    return(
        <>
            <Navbar />
            {/* <Score me={me}/> */}
            <h1 className="header">Calendar Page</h1>
            <div className='app'>
                <div className='calendar-container'>
                    <Calendar 
                    // onChange={setDate} value={date}
                    />
                </div>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
             </div>
        </>
        
    )
}

export default MyCalendar;