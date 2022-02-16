import React, { useState, useEffect } from "react";

import { DegradeButton } from "../../components/degradeButton";

import "./styles.css";
import { CarCard } from "../../components/carCard";
import { Link } from "react-router-dom";
import CarsService from "../../services/cars";

export const Home = () => {
  useEffect(() => {
    setCars(CarsService.getCars());
  }, []);
  const [cars, setCars] = useState([]);

  return (
    <div className="container">
      <div className="container-home">
        <div className="welcome">
          <h1>Bem vindo ao SóCarros</h1>
          <p>Veja nossos incríveis carros!</p>
          <div className="button-wrapper">
            <Link className="" to="register-car">
              <DegradeButton>Adicionar carro</DegradeButton>
            </Link>
          </div>
        </div>
        <div className="show-cars">
          <h2>Nossos carros mais populares!</h2>
          <div className="cars-grid">
            {cars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
