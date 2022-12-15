import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ToDo from "./ToDo";

function ToDoList({data, me, setData, score, setScore, handleScoreToDo}){

    const [name, setTaskName] = useState("")
    
    function handleClick(id) {
        handleScoreToDo()        
        fetch(`/deleteToDo/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => console.log("deleted!"));
      }


    function handleAddTask(e){
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
            .then((data) => console.log(data));
    }

    function handleTaskName(e){
        setTaskName(e.target.value)
    }

    return(
        <div className="ToDoTodayContainer">
            <h1 className="header" id="toDoHeader">Today</h1>
            <p>
                {data.map((data) => 
                <div id="todoData">{data.name}  
                {/* <button className="completedTask" onClick={handleCompleted}>Mark Completed</button> */}
                <button className="completedTask" onClick={() => handleClick(data.id)}>Done</button>
                </div>)}
            </p>
            <AddTask handleAddTask={handleAddTask} handleTaskName={handleTaskName} name={name}/>
        </div>
       
    )
}

export default ToDoList;