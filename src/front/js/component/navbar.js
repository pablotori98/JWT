import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../styles/index.css"
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()
	const token = localStorage.getItem("token")
	const NavbarWithoutToken = () =>{
		return(
			<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/" className="linktitle">
					<h3 className="navtitle">JWT FANPAGE</h3>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btnhome me-1">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btnhome ms-1">SignUp</button>
					</Link>
				</div>
			</div>
		</nav>
	);}

	const NavbarWithToken = () =>{
		const logout = () => {
			localStorage.removeItem("token"),
			window.location.reload(false);

		}
		return(
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/" className="linktitle">
					<h3 className="navtitle">FWT FANPAGE</h3>
				</Link>
				<div className="ml-auto">
					<button onClick={logout} className="btn btnhome ms-1">LogOut</button>
				</div>
			</div>
		</nav>
		)
	}
	return (
		token ? NavbarWithToken() : NavbarWithoutToken()
	)

};
