import { useState } from "react";
import AddMonthly from "./AddMonthly";

function ToDoMonthly({monthly, me}){
    const [name, setTaskName] = useState("")

    function handleAddTask(e){
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
            .then((data) => console.log(data));
    }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }

    function handleDeleteMonthly(id){
        fetch(`/to_do_monthlies/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
    }


    return(
        <div className="ToDoWeeklyContainer">
            <h1 className="header" id="toDoHeader">This Month</h1>
            <h3>{monthly.map((todo) => <div>
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteMonthly(todo.id)}>Finish Task</button>
            </div>)}</h3>
            <AddMonthly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
    )
}

export default ToDoMonthly;