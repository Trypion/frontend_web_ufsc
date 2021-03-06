import { LayoutComponets } from "../../components/layoutComponents";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/login-register.css";
import { DegradeButton } from "../../components/degradeButton";

import { useNavigate } from "react-router-dom";

import { register } from "../../services/auth";

export const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await register({ email, name, password });
    navigate("/");
  };

  return (
    <LayoutComponets>
      <form className="login-form">
        <span className="login-form-title login-form-title-register">
          Criar Conta
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
            className={name !== "" ? "has-val input" : "input"}
            type="email"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
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
          <DegradeButton className="login-form-btn" onClick={handleRegister}>
            Registrar
          </DegradeButton>
        </div>

        <div className="text-center">
          <span className="txt1">J?? possui conta?</span>
          <Link className="txt2" to="/login">
            Login.
          </Link>
        </div>
      </form>
    </LayoutComponets>
  );
};
