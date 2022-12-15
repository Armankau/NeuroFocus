import { useState } from "react";
import AddYearly from "./AddYearly";

function ToDoYearly({yearly, me, handleScoreToDo, setYearly}){

    const [name, setTaskName] = useState("")

    function handleAddTask(e){
        e.preventDefault()
        const formData = {
           name: name,
           user_id: me.id
        }
        fetch("/yearlyToDo", {
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
      setYearly([...yearly, newTask])
    }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }
    function handleDeleteYearly(id){
        handleScoreToDo()        
        fetch(`/to_do_yearlies//${id}`, {
            method: "DELETE",
          })
        .then((r) => r.json())
        .then((data) => console.log(data));
    }

    return(
        <div className="ToDoYearlyContainer">
        <h1 className="header" id="toDoHeader">This Year</h1>
        <p>{yearly.map((todo) => <div>
            {todo.name}
            <button className="completedTask" 
            onClick={() => handleDeleteYearly(todo.id)}
            >Done</button>
        </div>)}</p>
        <AddYearly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
    </div>
    )
}

export default ToDoYearly;