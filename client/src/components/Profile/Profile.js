import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Profile.css"
function Profile({me}){
    console.log(me)
    return(
        <>
            <Navbar />
            <h1 className="header">Your Profile</h1>
            <div className="profileContainer">
                <div className="profileInformation">
                    <h2  className="header">Personal Information</h2>
                    <img className="profileImage" src={me.image}/>
                    <p className="info">Score: {me.score}</p>
                    <p className="info">Username: {me.username}</p>
                    <p className="info">Name: {me.name}</p>
                    <p className="info">Age: {me.age}</p>
                    <p className="info">Sex: {me.sex}</p>
                </div>
            </div>
        </>
    )
}

export default Profile;