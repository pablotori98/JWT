import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css"

export const Signup = () =>{
    const navigate = useNavigate()
    const [userName, setUsername] = useState ('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const {store, actions}= useContext(Context)

    const handlesignup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": userName,
    "name": name,
    "surname": surname,
    "email": email,
    "password": password
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(process.env.BACKEND_URL+"/api/signup", requestOptions)
    .then(response => response.json())
    .then(result => {
        if(result){
            navigate("/")
        }
    })
    .catch(error => console.log('error', error));
}

    return (
        <div className="backgroundsignup">
            <div className="cardregister">
                <h1>SignUp</h1>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="text" placeholder="Username"   onChange={(e)=> setUsername(e.target.value)}   /></div>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="text" placeholder="Name"   onChange={(e)=> setName(e.target.value)}   /></div>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="text" placeholder="Surname"   onChange={(e)=> setSurname(e.target.value)}   /></div>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="email" placeholder="Email"onChange={(e)=> setEmail(e.target.value)}   /></div>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="password" placeholder="Password"   onChange={(e)=> setPassword(e.target.value)}   /></div>
                <div><button className="btn btnsignup" onClick={handlesignup}>Submit</button></div>
                
                
            </div>
        </div>
    )
}