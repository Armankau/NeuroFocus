import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ToDo from "./ToDo";

function ToDoList({data, me, setData, setMe, handleTaskScore}){

    const [name, setTaskName] = useState("")
    

    function handleClick(data) {
      handleTaskScore()
        fetch(`/deleteToDo/${data.id}`, {
          method: "DELETE",
        })
        .then(() => onDelete(data));
      }

      function onDelete(deleted){
        const newTasks = data.filter((task) => task.id != deleted.id)
        setData(newTasks)
      }
    
    
    function handleAddTask(e){
      e.preventDefault()
        const formData = {
           name: name,
           user_id: me.id
        }
        fetch("/todo", {
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
      setData([...data, newTask])
    }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }

    function handleDelete(data){
        fetch(`/deleteToDo/${data.id}`, {
          method: "DELETE",
        })
        .then(() => onDelete(data));
      }

      function onDelete(deleted){
        const newTasks = data.filter((task) => task.id != deleted.id)
        setData(newTasks)
      }


    return(
      <>
      <h2>Total Tasks Completed: {me.task_score}</h2>
        <div className="ToDoTodayContainer">
            <h1 className="header" id="toDoHeader">Today</h1>
            <p className="myToDo">
                {data.map((data) => 
                <div className="todo" key={data.id}>{data.name}  
                {/* <button className="completedTask" onClick={handleCompleted}>Mark Completed</button> */}
                <button className="completedTask" onClick={() => handleClick(data)}>Done</button>
                <button className="completedTask" onClick={() => handleDelete(data)}>Delete</button>
                </div>)}
            </p>
            <AddTask handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
        </>
       
    )
}

export default ToDoList;