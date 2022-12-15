function ToDoYearly({yearly, me}){
    return(
        <div className="ToDoWeeklyContainer">
        <h1 className="header" id="toDoHeader">This Year</h1>
        <h3>{yearly.map((todo) => <div>
            {todo.name}
            <button className="completedTask" 
            // onClick={() => handleDeleteWeekly(todo.id)}
            >Finish Task</button>
        </div>)}</h3>
    </div>
    )
}

export default ToDoYearly;