function ToDoYearly({yearly, me}){
    function handleDeleteYearly(id){
        fetch(`/to_do_yearlies//${id}`, {
            method: "DELETE",
          })
        .then((r) => r.json())
        .then((data) => console.log(data));
    }

    return(
        <div className="ToDoWeeklyContainer">
        <h1 className="header" id="toDoHeader">This Year</h1>
        <h3>{yearly.map((todo) => <div>
            {todo.name}
            <button className="completedTask" 
            onClick={() => handleDeleteYearly(todo.id)}
            >Finish Task</button>
        </div>)}</h3>
    </div>
    )
}

export default ToDoYearly;