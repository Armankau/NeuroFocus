import { useState } from "react";
import AddWeekly from "./AddWeekly";

function ToDoWeekly({weekly, me, handleScoreToDo, setWeekly}){
    const [name, setTaskName] = useState("")

    function handleDeleteWeekly(data){
        handleScoreToDo()        
        fetch(`/deleteToDoWeekly/${data.id}`, {
            method: "DELETE",
          })
          .then(() => onDelete(data));
        }
  
        function onDelete(deleted){
          const newTasks = weekly.filter((task) => task.id != deleted.id)
          setWeekly(newTasks)
        }

        function handleDelete(data){
          fetch(`/deleteToDoWeekly/${data.id}`, {
              method: "DELETE",
            })
            .then(() => onDelete(data));
          }
    
          function onDelete(deleted){
            const newTasks = weekly.filter((task) => task.id != deleted.id)
            setWeekly(newTasks)
          }

    function handleAddTask(e){
        e.preventDefault()
        const formData = {
           name: name,
           user_id: me.id
        }
        fetch("/weeklyToDo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
          .then((r) => r.json())
          .then((newTask) => handleNewTask(newTask));
  }

  function handleNewTask(newTask){
      setWeekly([...weekly, newTask])
    }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }
    return(
        <div className="ToDoWeeklyContainer">
            <h1 className="header" id="toDoHeader">This Week</h1>
            <p>{weekly.map((todo) => <div>
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteWeekly(todo)}>Done</button>
                <button className="completedTask" onClick={() => handleDelete(todo)}>Delete</button>

            </div>)}</p>
            <AddWeekly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
    )
}

export default ToDoWeekly;