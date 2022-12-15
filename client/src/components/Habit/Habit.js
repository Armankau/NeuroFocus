function Habit({habits, setHabits}){
     
    function handleClick(habit) {
          fetch(`/deleteHabits/${habit.id}`, {
            method: "DELETE",
          })
          .then(() => onDelete(habit));
        }
  
        function onDelete(deleted){
            const newHabits = habits.filter((habit) => habit.id != deleted.id)
            setHabits(newHabits)
        }

        console.log(habits)

    return(
        <>
            <h1>Habit</h1>
            <p>{habits.map((habit) => <div>{
            habit.name}
            <button onClick={() => handleClick(habit)}>Remove</button>
            </div>)}
            </p>
        </>
    )
}

export default Habit;