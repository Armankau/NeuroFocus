import { useState } from "react";
import AddYearly from "./AddYearly";

function ToDoYearly({yearly, me, handleScoreToDo, setYearly}){

    const [name, setTaskName] = useState("")

    // console.log(document.getElementById("ToDoform"))
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
    function handleDeleteYearly(data){
        handleScoreToDo()        
        fetch(`/to_do_yearlies//${data.id}`, {
            method: "DELETE",
          })
          .then(() => onDelete(data));
        }
  
        function onDelete(deleted){
          const newTasks = yearly.filter((task) => task.id != deleted.id)
          setYearly(newTasks)
        }
    
      function handleDelete(data){
          fetch(`/to_do_yearlies//${data.id}`, {
              method: "DELETE",
            })
            .then(() => onDelete(data));
      }
    
          function onDelete(deleted){
            const newTasks = yearly.filter((task) => task.id != deleted.id)
            setYearly(newTasks)
          }

    return(
        <div className="ToDoYearlyContainer">
        <h1 className="header" id="toDoHeader">This Year</h1>
        <p>{yearly.map((todo) => <div>
            {todo.name}
            <button className="completedTask" 
            onClick={() => handleDeleteYearly(todo)}
            >Done</button>
             <button className="completedTask" 
            onClick={() => handleDelete(todo)}
            >Delete</button>
        </div>)}</p>
        <AddYearly handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
    </div>
    )
}

export default ToDoYearly;