import React from "react";
import "./styles.css";
import { DegradeButton } from "../degradeButton";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-container">
        <Link to="/">
          <h1 className="logo">Ping-A</h1>
        </Link>
        <ul id="navbar-items">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/register-car">Cadastrar carro</Link>
          </li>
        </ul>
        <div className="login-button-login">
          <Link to="/login">
            <DegradeButton>Fazer Login</DegradeButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};
