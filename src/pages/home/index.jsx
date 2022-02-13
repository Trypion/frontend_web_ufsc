import React from "react";

import {DegradeButton} from "../../components/degradeButton";

import './style.css'


export const Home = () => {
    return (
        <div className="container">
            <div className="container-home">
                <div className="welcome">
                    <h1>Bem vindo ao SóCarros</h1>
                    <p>Veja nossos incríveis carros!</p>
                    <div className="button-wrapper">
                        <DegradeButton>Adicionar carro</DegradeButton>
                    </div>
                </div>
                <div className="show-cars">
                    <h2>Nossos carros mais populares!</h2>
                    <div className="cars-grid">

                    </div>
                </div>
            </div>
        </div>

    )
}

