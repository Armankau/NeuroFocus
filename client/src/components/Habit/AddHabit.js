function AddHabit({handleAddHabit, handleHabitName, name}){
    return(
    <div>
         <form onSubmit={handleAddHabit} className="habitForm">
            <input type="text" placeholder="Enter task name..." onChange={handleHabitName} value={name}/>
            <input type="submit" placeholder="Add task" value="Add task" id="addButton"/>
        </form>
    </div>
    )
}

export default AddHabit;