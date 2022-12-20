function AddHabit({handleAddHabit, handleHabitName, name}){
    return(
    <div>
         <form onSubmit={handleAddHabit} className="ToDoform">
            <input type="text" placeholder="Enter Habit name..." onChange={handleHabitName} value={name}/>
            <input type="submit" placeholder="Add Habit" value="Add task" id="addButton"/>
        </form>
    </div>
    )
}

export default AddHabit;