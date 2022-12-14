import { useState } from "react";
import AddWeekly from "./AddWeekly";

function ToDoWeekly({weekly, me}){
    const [name, setTaskName] = useState("")

    function handleDeleteWeekly(id){
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
            <h3>{weekly.map((todo) => <div>
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteWeekly(todo.id)}>Finish Task</button>
            </div>)}</h3>
            <AddWeekly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
    )
}

export default ToDoWeekly;