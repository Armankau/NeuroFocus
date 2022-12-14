function ToDoWeekly({weekly}){

    return(
        <div className="ToDoWeeklyContainer">
            <h1 className="header" id="toDoHeader">This Week</h1>
            <h3>{weekly.map((todo) => <div>
                {todo.name}
                {/* <button className="completedTask" onClick={() => deleteMonthlyTask(todo.id)}>Finish Task</button> */}
            </div>)}</h3>
        </div>
    )
}

export default ToDoWeekly;