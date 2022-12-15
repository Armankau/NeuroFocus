import { useState } from "react";
import AddWeekly from "./AddWeekly";

function ToDoWeekly({weekly, me, handleScoreToDo}){
    const [name, setTaskName] = useState("")

    function handleDeleteWeekly(id){
        handleScoreToDo()        
        fetch(`/deleteToDoWeekly/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
    }

    function handleAddTask(e){
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
            .then((data) => console.log(data));
    }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }
    return(
        <div className="ToDoWeeklyContainer">
            <h1 className="header" id="toDoHeader">This Week</h1>
            <p>{weekly.map((todo) => <div>
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteWeekly(todo.id)}>Done</button>
            </div>)}</p>
            <AddWeekly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
    )
}

export default ToDoWeekly;