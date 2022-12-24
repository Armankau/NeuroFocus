import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import Score from "../Score/Score";
import Event from "./Event";
import Calendar from 'react-calendar';
import "./Calendar.css"
import 'react-calendar/dist/Calendar.css';

function MyCalendar({me}){
    const [date, setDate] = useState(new Date());
    const [event_name, setEvent] = useState("")
    const [events, setEvents] = useState([])

    function handleEvent(e){
        setEvent(e.target.value)
    }

    useEffect(() => {
        fetch("/events")
        .then((resp) => resp.json())
        .then((data) => setEvents(data))
      },[])

    function handleCalendarEvent(e){
        const formData = {
           event_name: event_name,
           user_id: me.id,
           event_date: date.toJSON().slice(0,10)
        }
        fetch("/event", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((data) => setEvents(data));
    }
    
    return(
        <>
            <Navbar />
            {/* <Score me={me}/> */}
            <h1 className="header">Calendar Page</h1>
            <div className='app'>
                <div className='calendar-container'>
                    <Calendar 
                    onChange={setDate} value={date}
                    />
                </div>
                {/* <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p> */}
             </div>
             <Event events={events} setEvents={setEvents} date={date}
             />
             <form className="eventForm" onSubmit={handleCalendarEvent}>
                <h3 className="header">Create a new event for the selected date:</h3>
                <input type="text" placeholder="Enter event name..." value={event_name} onChange={(e) => handleEvent(e)}/>
                <input type="text" value={date.toJSON().slice(0,10)} onChange={(e) => e.target.value}/>
                <input type="submit" value="Create a new event"/>
             </form>
        </>
        
    )
}

export default MyCalendar;