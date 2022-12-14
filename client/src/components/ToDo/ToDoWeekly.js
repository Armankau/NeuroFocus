function ToDoWeekly({weekly}){
    function handleDeleteWeekly(id){
        fetch(`/deleteToDoWeekly/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((data) => console.log(data));
    }
    return(
        <div className="ToDoWeeklyContainer">
            <h1 className="header" id="toDoHeader">This Week</h1>
            <h3>{weekly.map((todo) => <div>
                {todo.name}
                <button className="completedTask" onClick={() => handleDeleteWeekly(todo.id)}>Finish Task</button>
            </div>)}</h3>
        </div>
    )
}

export default ToDoWeekly;