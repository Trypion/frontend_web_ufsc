import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DegradeButton } from "../../components/degradeButton";
import CarsService from "../../services/cars";

import "./styles.css";

export const RegisterCars = () => {
  const navigate = useNavigate();   
  const [car, setCar] = useState({
    model: "",
    price: null,
    photo: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    CarsService.addCar(car);
    console.log("carro adicionado redirecionando...");
    navigate(`/`);
  };

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <h1 className="">Cadastro de carros</h1>

      <div id="container-register-car" className="card p-3 d-flex align-items-center justify-content-center flex-column">
        <h6>Preencha as informações do carro</h6>

        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="modelo">Modelo</label>
            <input
              type="text"
              id="model"
              name="model"
              onChange={handleChange}
              required
              class="form-control"
              placeholder="Digite o modelo"
            />
            <div class="invalid-feedback">
              <div>Modelo é obrigatório</div>
            </div>
          </div>

          <div class="form-group">
            <label for="modelo">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
              required
              class="form-control"
              placeholder="Digite o preço"
            />
            <div class="invalid-feedback">
              <div>Preço é obrigatório</div>
            </div>
          </div>

          <div class="form-group">
            <label for="modelo">Foto</label>
            <input
              type="text"
              id="photo"
              name="photo"
              onChange={handleChange}
              required
              class="form-control"
              placeholder="link da foto"
            />
            <div class="invalid-feedback">
              <div>Foto é obrigatório</div>
            </div>
          </div>

          <div class="form-group">
            <label for="modelo">Descrição</label>
            <textarea
              rows="5"
              id="description"
              name="description"
              onChange={handleChange}
              class="form-control"
              placeholder="Uma breve descrição"
            />
          </div>

          <div className="px-3 pt-3 btn-container">
            <DegradeButton type="submit">Cadastrar</DegradeButton>
          </div>
        </form>
      </div>
    </div>
  );
};
