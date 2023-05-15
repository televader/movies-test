import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <Link to={"/"}><img className="logo-img" src="./images/logo.png" alt="logo" /></Link>
                    <h1 className="navbar-title"><Link to={"/"}>Cinemate</Link></h1>
                </div>
                <div>
                    <div className="menu-items"><Link to={"/"}>Home</Link></div>
                    <div className="item"><Link to={"/about"}>About</Link></div>
                    <div className="item"><Link to={"/contact"}>Contact</Link></div>
                </div>
            </div >
        </>
    )
}