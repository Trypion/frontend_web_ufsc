import React from "react";
import "./styles.css"
import {DegradeButton} from "../degradeButton";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (<nav id="navbar">
                <div id="navbar-container">
                    <h1 className="logo">Ping-A</h1>
                    <ul id="navbar-items">
                        <li><a href="#">Início</a></li>
                        <li><a href="#clients">Sobre</a></li>
                        <li><a href="#gallery">Fotos</a></li>
                    </ul>
                    <div className="login-button-login">
                        <DegradeButton>Fazer Login</DegradeButton>
                    </div>
                </div>
            </nav>
    )
}