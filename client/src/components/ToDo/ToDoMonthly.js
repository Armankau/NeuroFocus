function ToDoMonthly({monthly}){
    return(
        <div className="ToDoWeeklyContainer">
            <h1 className="header" id="toDoHeader">This Month</h1>
            <h3>{monthly.map((todo) => <div>
                {todo.name}
                {/* <button className="completedTask">Finish Task</button> */}
            </div>)}</h3>
        </div>
    )
}

export default ToDoMonthly;