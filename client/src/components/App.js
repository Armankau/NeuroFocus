import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import CreateAccount from "./CreateAccount/CreateAccount";
import { Route, Routes } from "react-router-dom";
import Calendar from "./Calendar";
import Profile from "./Profile/Profile";
import ToDo from "./ToDo/ToDo";
import HabitTracker from "./Habit/HabitTracker";
import DailyPuzzle from "./DailyPuzzle";

function App() {
  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);
  const [me, setMe] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((resp) => resp.json())
    .then((info) => setMe(info))
  },[])


  return (
    <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/create_account" element={<CreateAccount />} />
    <Route exact path="/" element={<Calendar me={me}/>} />
    <Route exact path="/to_do" element={<ToDo me={me}/>} />
    <Route exact path="/habit_tracker" element={<HabitTracker me={me}/>} />
    <Route exact path="/profile" element={<Profile me={me}/>} />
    <Route exact path="/daily_puzzle" element={<DailyPuzzle me={me}/>} />

    </Routes>
    );
}

export default App;
