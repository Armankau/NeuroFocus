import { useState } from "react";
import AddHabit from "./AddHabit";

function Habit({habits, setHabits, me, handleScoreToDo}){
    const [name, setName] = useState("")
    const [completed, setCompleted] = useState(0)

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
           completed: completed
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
      if (habit.completed == 0){
        fetch(`/habit/${habit.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({completed: habit.completed + 1}),
      })
        .then((r) => r.json())
        .then((habit) => console.log(habit.completed));
      }
      window.location.reload()
    }


    function handleNewHabit(newHabit){
      setHabits([...habits, newHabit])
    }
    

    function handleHabitName(e){
        setName(e.target.value)
    }

    function handleReset(){
      // console.log(habits)
       const habitDone = habits.filter((habit) => habit.completed === 1)
       for (let i = 0; i < habitDone.length; i++) {
        console.log(habitDone[i].id)
        fetch(`/habit/${habitDone[i].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({completed: habitDone[i].completed - 1}),
        })
          .then((r) => r.json())
          .then((data) => console.log(data));
       }
       window.location.reload()
    }

    return(
        <div id="habitTracker">
        <h1 className="header">My Habit Tracker
        <button onClick={handleReset}>Reset All</button>
        </h1>
        {habits.map((habit) => <p className={habit.completed === 1? "strike" : ""}>
            {habit.name}
            <button onClick={() => handleClick(habit)} className="deleteHabit">Delete Habit</button>
            <button onClick={() => handleComplete(habit)} className="completeHabit">Completed</button>
        </p>)}
        <AddHabit handleAddHabit={handleAddHabit} handleHabitName={handleHabitName} name={name}/>
        </div>
    )
}

export default Habit;