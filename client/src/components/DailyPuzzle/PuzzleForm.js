function PuzzleForm(row, column, handleRow, handleColumn, handleDimension){
    return(
        <div>
             {/* <form onSubmit={handleDimension}>
                <input type="text" placeholder="Enter task name..." onChange={handleRow} value={row}/>
                <input type="text" placeholder="Enter task name..." onChange={handleColumn} value={column}/>
                <input type="submit" placeholder="Add task" value="Add task" id="addButton"/>
            </form> */}
        </div>
    )
}

export default PuzzleForm;