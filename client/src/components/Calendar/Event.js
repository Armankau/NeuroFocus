function Event({events, date}){
    
    const selected = events.filter((event) => event.event_date == date.toJSON().slice(0,10))
    console.log(selected)
    return(
        <>
            <h3 className="header">Your events for {date.toJSON().slice(0,10)} :</h3>
            <div className="event">
            {selected.map((event) => <p>{event.event_name}</p>)}
            </div>
            
        </>
    )
    
}

export default Event;