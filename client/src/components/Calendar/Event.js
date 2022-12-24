import { useState } from "react";

function Event({events, setEvents, date}){


    function handleDeleteEvent(data){
        console.log(data.id)
        fetch(`/deleteEvent/${data.id}`, {
          method: "DELETE",
        })
        .then(() => onDelete(data));
      }

      const selected = events.filter((event) => event.event_date == date.toJSON().slice(0,10))


      function onDelete(deleted){
        const newEvents = selected.filter((event) => event.id != deleted.id)
        setEvents(newEvents)
      }



    return(
        <>
            <h3 className="header">Your events for {date.toJSON().slice(0,10)}:</h3>
            <div className="event">
            {selected.map((data) => <p>
                {data.event_name}
            <button onClick={() => handleDeleteEvent(data)} className="eventButton">Delete Event</button>
            </p>)}
            </div>
            
        </>
    )
    
}

export default Event;