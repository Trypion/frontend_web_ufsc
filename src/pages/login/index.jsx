import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponets } from "../../components/layoutComponents";
import { DegradeButton } from "../../components/degradeButton";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/auth";

import "../../assets/styles/login-register.css";

import pingaImg from "../../assets/images/ping-a.png";

export const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email: ", email);
    await login({ email, password });

    navigate("/");
  };

  return (
    <LayoutComponets>
      <form className="login-form">
        <span className="login-form-title">
          <img src={pingaImg} alt="" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <DegradeButton
            className="login-form-btn"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </DegradeButton>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta?</span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponets>
  );
};
