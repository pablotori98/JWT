import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

	const token = localStorage.getItem("token")

	const HomeWithoutToken = () =>{
		return (
		<div className="backgroundhome d-flex justify-content-center align-items-center">
			<div className="maincard d-flex flex-column align-items-center justify-content-center h-100">
				<h1 className="mt-5">Get ready to use JWT</h1>
				<div className="d-flex m-4">
				<Link to="/login"><button className="btnhome">Login</button></Link>
				<Link to="/signup"><button className="btnhome">SignUp</button></Link>
				</div>
			</div>	
		</div>
		)
	}

	const HomeWithToken = () =>{
		return (
		<div className="backgroundhome d-flex justify-content-center align-items-center">
			<div className="maincard d-flex flex-column align-items-center justify-content-center h-100">
				<h1 className="mt-5">Congratulations!!</h1>
				<h3>Now you know how to use JWT</h3>
			</div>	
		</div>
		)
	}

	return (
		token ? HomeWithToken() : HomeWithoutToken()
	);
};
