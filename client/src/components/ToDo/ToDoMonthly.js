import { useState } from "react";
import AddMonthly from "./AddMonthly";

function ToDoMonthly({monthly, me, handleScoreToDo}){
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
        handleScoreToDo()        
        fetch(`/to_do_monthlies/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
    }


    return(
        <div className="ToDoMonthlyContainer">
            <h1 className="header" id="toDoHeader">This Month</h1>
            <p>{monthly.map((todo) => <div>
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteMonthly(todo.id)}>Done</button>
            </div>)}</p>
            <AddMonthly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
    )
}

export default ToDoMonthly;