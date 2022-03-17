import React from "react";
import "./styles.css";
import { DegradeButton } from "../degradeButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { me, logout } from "../../services/auth";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      me().then(({ name }) => setUserName(name));
    }
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    setUserName(null);
    navigate("/");
  };

  if (token) {
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
          <div>
            <p>Olá, {userName}</p>
          </div>
          <div className="login-button-login">
            <DegradeButton onClick={handleLogout}>Logout</DegradeButton>
          </div>
        </div>
      </nav>
    );
  } else {
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
  }
};
