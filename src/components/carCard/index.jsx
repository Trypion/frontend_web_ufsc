import React from "react";
import Popup from "../popup/Popup";
import { useState } from "react";

import {DegradeButton} from "../degradeButton";

import "./style.css"

export const CarCard = ({car}) => {
    const car_price_formated = car.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div className="car-card">
            <img src={car.photo} alt="" />
            <h3>{car.model}</h3>
            <h4>{car_price_formated}</h4>
            <p>{car.description}</p>
            <div className="car-card-button-wrapper">
                <button onClick={() => setButtonPopup(true)}>Mais Informações</button>
            </div>
            <Popup trigger={buttonPopup}>
                <h3>My popup</h3>
                <p>{car.description}</p>
            </Popup>
        </div>
    )
}