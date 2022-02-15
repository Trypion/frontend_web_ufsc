import React from "react";

import {DegradeButton} from "../degradeButton";

import "./style.css"

export const CarCard = ({car}) => {
    const car_price_formated = car.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return (
        <div className="car-card">
            <img src={car.photo} alt="" />
            <h3>{car.model}</h3>
            <h4>{car_price_formated}</h4>
            <p>{car.description}</p>
            <div className="car-card-button-wrapper">
                <DegradeButton>Mais Informações</DegradeButton>
            </div>
        </div>
    )
}