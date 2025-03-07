import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/index.css"


export const UserProfile = () => {
    const [result, setResult] = useState({})
    const token = localStorage.getItem("token")
    const params = useParams()
    const username = params.username
    const imgPerfil= "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    var requestOptions = {
        method: 'GET',
        headers: {'Authorization' : `Bearer ${token}`},
        redirect: 'follow',

      };
      useEffect(()=>{
      fetch(`https://3001-pablotori98-jwt-4m3598jmdia.ws-eu80.gitpod.io/api/${username}`, requestOptions)
        .then(response => response.json())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));

    },[])
    return( 

        <div className="backgroundprofile">
            <div className="cardprofile">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="card" style={{ width: "18rem"}}>
                    <img className="card-img-top" src={result.img_profile? result.img_profile: imgPerfil} alt="Card image cap"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">{console.log("este es el parametro"+params)}</h5>
                        <p className="card-text">Nombre de usuario: <strong>{result.username}</strong></p>
                        <p className="card-text text-center">Dirección de correo: <strong>{result.email}</strong></p>
                        <p className="card-text">Nombre: <strong>{result.name}</strong></p>
                        <p className="card-text">Apelido: <strong>{result.surname}</strong></p>
                        <a href="#" className="btn btn-primary">Añadir datos</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

       )

}