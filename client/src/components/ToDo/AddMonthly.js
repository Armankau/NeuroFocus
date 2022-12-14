function AddMonthly({handleAddTask, handleTaskName, name}){
    return(
    <div>
         <form onSubmit={handleAddTask} className="ToDoform">
            <input type="text" placeholder="Enter task name..." onChange={handleTaskName} value={name}/>
            <input type="submit" placeholder="Add task" value="Add task" id="addButton"/>
        </form>
    </div>
    )
}

export default AddMonthly;