import { useState } from "react";
import AddMonthly from "./AddMonthly";

function ToDoMonthly({monthly, me, handleTaskScore, setMonthly}){
    const [name, setTaskName] = useState("")

    function handleAddTask(e){
        e.preventDefault()
        const formData = {
           name: name,
           user_id: me.id
        }
        fetch("/monthlyToDo", {
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
        setMonthly([...monthly, newTask])
      }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }

    function handleDeleteMonthly(data){
        handleTaskScore()        
        fetch(`/to_do_monthlies/${data.id}`, {
            method: "DELETE",
          })
          .then(() => onDelete(data));
        }
  
        function onDelete(deleted){
          const newTasks = monthly.filter((task) => task.id != deleted.id)
          setMonthly(newTasks)
        }

        function handleDelete(data){
          fetch(`/to_do_monthlies/${data.id}`, {
              method: "DELETE",
            })
            .then(() => onDelete(data));
          }
    
          function onDelete(deleted){
            const newTasks = monthly.filter((task) => task.id != deleted.id)
            setMonthly(newTasks)
          }


    return(
        <div className="ToDoMonthlyContainer">
            <h1 className="header" id="toDoHeader">This Month</h1>
            <p>{monthly.map((todo) => <div key={todo.id} className="todo">
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteMonthly(todo)}>Done</button>
                <button className="completedTask" onClick={() => handleDelete(todo)}>Delete</button>

            </div>)}</p>
            <AddMonthly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
    )
}

export default ToDoMonthly;