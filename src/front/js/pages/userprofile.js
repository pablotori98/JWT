import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/index.css"


export const UserProfile = () => {
    const [result, setResult] = useState({})
    const {params} = useParams("")
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      useEffect(()=>{
      fetch(`https://3001-pablotori98-reactflaskh-adcy3g0pp92.ws-eu80.gitpod.io/api/user/pablotori98`, requestOptions)
        .then(response => response.json())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));
    },[])
    return( 

        <div className="backgroundprofile">
            <div className="cardprofile">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="card" style={{ width: "18rem"}}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{console.log("este es el parametro"+params)}</h5>
                        <p className="card-text">Tu nombre de usuario es {result.username}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

       )

}