import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ToDoList from "./ToDoList";
import "./ToDo.css"
import ToDoWeekly from "./ToDoWeekly";
import ToDoMonthly from "./ToDoMonthly";
import ToDoYearly from "./ToDoYearly";
import Score from "../Score/Score";
function ToDo({me, handleScoreToDo}){

    const [data, setData] = useState([])
    const [weekly, setWeekly] = useState([])
    const [monthly, setMonthly] = useState([])
    const [yearly, setYearly] = useState([])

 

    useEffect(() => {
        fetch("/todos")
        .then((resp) => resp.json())
        .then((info) => setData(info))
    },[])

    useEffect(() => {
        fetch("/weeklyToDo")
        .then((resp) => resp.json())
        .then((info) => setWeekly(info))
    },[])

    useEffect(() => {
        fetch("/to_do_monthlies")
        .then((resp) => resp.json())
        .then((info) => setMonthly(info))
    },[])



    useEffect(() => {
        fetch("/to_do_yearlies")
        .then((resp) => resp.json())
        .then((info) => setYearly(info))
    },[])

    return(
        <>
            <Navbar />
            {/* <Score me={me}/> */}
            <h1 className="header">My To Do List</h1>
            <ToDoList 
                data={data} 
                setData={setData} 
                me={me} 
                handleScoreToDo={handleScoreToDo}/>
            <ToDoWeekly 
                setWeekly={setWeekly}
                weekly={weekly} 
                me={me} 
                handleScoreToDo={handleScoreToDo}/>
            <ToDoMonthly 
                setMonthly={setMonthly}
                monthly={monthly} 
                me={me}  
                handleScoreToDo={handleScoreToDo}/>
            <ToDoYearly 
                setYearly={setYearly}
                yearly={yearly} 
                me={me} 
                handleScoreToDo={handleScoreToDo}/>
        </>

    )
}

export default ToDo;