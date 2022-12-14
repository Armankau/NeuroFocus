import React from "react";
import Login from "./Login/Login";
import CreateAccount from "./CreateAccount";
import { Route, Routes } from "react-router-dom";
import Calendar from "./Calendar";
import Profile from "./Profile/Profile";
import ToDo from "./ToDo";
import HabitTracker from "./HabitTracker";
import DailyPuzzle from "./DailyPuzzle";

function App() {
  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

  return (
    <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/create_account" element={<CreateAccount />} />
    <Route exact path="/" element={<Calendar />} />
    <Route exact path="/to_do" element={<ToDo />} />
    <Route exact path="/habit_tracker" element={<HabitTracker />} />
    <Route exact path="/profile" element={<Profile />} />
    <Route exact path="/daily_puzzle" element={<DailyPuzzle />} />

    </Routes>
    );
}

export default App;
