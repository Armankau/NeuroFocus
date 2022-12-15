import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Profile.css"
function Profile({me}){
    return(
        <>
            <Navbar />
            <h1 className="header">Your Profile</h1>
            <div className="profileContainer">
                <div className="profileInformation">
                    <h2  className="header">Personal Information</h2>
                    <p>Username: {me.username}</p>
                    <p>Name: {me.name}</p>
                    <p>Age: {me.age}</p>
                    <p>Sex: {me.sex}</p>
                </div>
            </div>
        </>
    )
}

export default Profile;