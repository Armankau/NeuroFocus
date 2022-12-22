import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import CreateAccount from "./CreateAccount/CreateAccount";
import { Route, Routes } from "react-router-dom";
import MyCalendar from "./Calendar/MyCalendar";
import Profile from "./Profile/Profile";
import ToDo from "./ToDo/ToDo";
import HabitTracker from "./Habit/HabitTracker";
import DailyPuzzle from "./DailyPuzzle/DailyPuzzle";

function App() {
  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);
  const [me, setMe] = useState([])
  const [score, setScore] = useState("")

  useEffect(() => {
    fetch("/me")
    .then((resp) => resp.json())
    .then((info) => setMe(info))
  },[])

  function handleScoreToDo() {
    fetch(`/score/${me.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({score: me.score ++}),
    })
      .then((r) => r.json())
      .then((task) => setScore(task.score));
  }

  return (
    <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/create_account" element={<CreateAccount />} />
    <Route exact path="/" element={<MyCalendar me={me}/>} />
    <Route exact path="/to_do" element={<ToDo me={me} handleScoreToDo={handleScoreToDo}  setMe={setMe}/>} />
    <Route exact path="/habit_tracker" element={<HabitTracker me={me} handleScoreToDo={handleScoreToDo}/>} />
    <Route exact path="/profile" element={<Profile me={me} score={score} setMe={setMe}/>} />
    <Route exact path="/daily_puzzle" element={<DailyPuzzle me={me} handleScoreToDo={handleScoreToDo} setMe={setMe}/>} />

    </Routes>
    );
}

export default App;
