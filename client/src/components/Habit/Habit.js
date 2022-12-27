import { useState } from "react";
import AddHabit from "./AddHabit";
import Progress from "./Progress";

function Habit({habits, setHabits, me, setMe, handleScoreToDo}){

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

    function handleHabitScore(){
      const data = {
        habit_score: me.habit_score + 1
    }
    fetch(`/me/${me.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((me) => setMe(me));
    }



    function handleComplete(habit){
      if (habit.completed == 0){
        handleHabitScore()
        const data = {
          completed: habit.completed + 1
        }
        fetch(`/habit/${habit.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((data) => onCompleted(data));
      }
    }

    function onCompleted(data){
      const updatedHabits = habits.map(
        habit =>
        {
          if (habit.id == data.id) {
            return {...habit, completed: habit.completed + 1}
          }
          return habit
        })
      setHabits(updatedHabits)
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
        // console.log(habitDone[i].id)
        fetch(`/habit/${habitDone[i].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({completed: habitDone[i].completed - 1}),
        })
          .then((r) => r.json())
          .then((data) => 
            console.log([data])
          );
       }
       window.location.reload(false)
      }


    // function onReset(data){
    //   let thisArray = new Array()
    //   thisArray.push(data)
    //   console.log(thisArray)
    //   const updatedHabits = habits.map(
    //     habit =>
    //     {
    //       if (habit.id == data.id) {
    //         return {...habit, completed: habit.completed - 1}
    //       }
    //       return habit
    //     })
    //   setHabits(updatedHabits)
    // }

    return(
      <>
        <div id="habitTracker">
        <h1 className="header">My Habit Tracker
        </h1>
        {habits.map((habit) => <p  key={habit.id} className={habit.completed === 1? "strike" : ""}>
            {habit.name}
            <button onClick={() => handleClick(habit)} className="deleteHabit">Delete Habit</button>
            <button onClick={() => handleComplete(habit)} className="completeHabit">Completed</button>
        </p>)}
        <AddHabit handleAddHabit={handleAddHabit} handleHabitName={handleHabitName} name={name}/>
        <button className="resetBtn" onClick={handleReset}>Reset All</button>
        </div>
        <h3 className="score">Total Habits Completed: {me.habit_score}</h3>
        <Progress habits={habits}/>
        </>
    )
}

export default Habit;