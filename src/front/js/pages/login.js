import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css"

export const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const {store, actions}= useContext(Context)

    const handlelogin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "email": email,
    "password": password
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(process.env.BACKEND_URL+"/api/login", requestOptions)
    .then(response => response.json())
    .then(data => {
        if(data.token !=undefined){
            localStorage.setItem('token', data.token),
            navigate(`/user/${data.username}`)
        }
    })
    .catch(error => console.log('error', error));
}

    return (
        <div className="backgroundsignup">
            <div className="cardregister">
                <h1>Login</h1>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="email" placeholder="Email"onChange={(e)=> setEmail(e.target.value)}   /></div>
                <div className="w-50"><input className="form-control m-3" aria-label="Large" type="password" placeholder="Password"   onChange={(e)=> setPassword(e.target.value)}   /></div>
                <div><button className="btn btnsignup" onClick={handlelogin}>Submit</button></div>
                
                
            </div>
        </div>
    )
}