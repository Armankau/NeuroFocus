import { useState } from "react";
import AddHabit from "./AddHabit";

function Habit({habits, setHabits, me, handleScoreToDo}){
    const [name, setName] = useState("")
    // const [completed, setCompleted] = useState(false)

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


    function handleAddHabit(e){
        e.preventDefault()
        const formData = {
           name: name,
           user_id: me.id,
        }
        fetch("/habit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((r) => r.json())
            .then((newHabit) => handleNewHabit(newHabit));
    }

    function handleComplete(habit){
      console.log(habit)
      handleScoreToDo()
      // fetch(`/habit/${habit.id}`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({score: me.score ++}),
      // })
      //   .then((r) => r.json())
      //   .then((task) => (task.score));
    }

    function handleNewHabit(newHabit){
      setHabits([...habits, newHabit])
    }
    

    function handleHabitName(e){
        setName(e.target.value)
    }

    return(
        <div id="habitTracker">
        <h1 className="header">My Habit Tracker</h1>
        {habits.map((habit) => <p key={habit.name} className="habit">
            {habit.name}
            <button onClick={() => handleClick(habit)} className="deleteHabit">Delete Habit</button>
            <button onClick={() => handleComplete(habit)} className="completeHabit">Completed</button>

        </p>)}
        <AddHabit handleAddHabit={handleAddHabit} handleHabitName={handleHabitName} name={name}/>
        </div>
    )
}

export default Habit;