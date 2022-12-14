import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./Profile.css"
function Profile(){

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("/me")
        .then((resp) => resp.json())
        .then((data) => setData(data))
    },[])

    console.log(data)
    return(
        <>
            <Navbar />
            <h1 className="header">Your Profile</h1>
            <div className="profileContainer">
                <div className="profileInformation">
                    <h2  className="header">Personal Information</h2>
                    <p>Username: {data.username}</p>
                    <p>Name: {data.name}</p>
                    <p>Age: {data.age}</p>
                    <p>Sex: {data.sex}</p>
                </div>
            </div>
        </>
    )
}

export default Profile;