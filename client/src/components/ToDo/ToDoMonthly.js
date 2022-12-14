function ToDoMonthly({monthly}){
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
        </div>
    )
}

export default ToDoMonthly;