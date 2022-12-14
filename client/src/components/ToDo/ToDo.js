import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import ToDoList from "./ToDoList";
import "./ToDo.css"
import ToDoWeekly from "./ToDoWeekly";
import ToDoMonthly from "./ToDoMonthly";
function ToDo(){

    const [data, setData] = useState([])
    const [me, setMe] = useState([])
    const [weekly, setWeekly] = useState([])
    const [monthly, setMonthly] = useState([])


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
        fetch("/me")
        .then((resp) => resp.json())
        .then((info) => setMe(info))
    },[])
    return(
        <>
            <Navbar />
            <h1 className="header">My To Do List</h1>
            <ToDoList data={data} setData={setData} me={me}/>
            <ToDoWeekly weekly={weekly} me={me}/>
            <ToDoMonthly monthly={monthly} me={me}/>
        </>

    )
}

export default ToDo;