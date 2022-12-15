function Habit({habits}){
    return(
        <>
            <h1>Habit</h1>
            <p>{habits.map((habit) => <div>{habit.name}</div>)}</p>
        </>
    )
}

export default Habit;