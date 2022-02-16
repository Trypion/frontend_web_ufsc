import React, {useState} from "react";

import {DegradeButton} from "../../components/degradeButton";

import './style.css'
import MareaPic from '../../assets/images/homol_cars/download.jpeg'
import FuscaPic from '../../assets/images/homol_cars/VW-Fusca.jpg'
import {CarCard} from "../../components/carCard";

export const Home = () => {

    const [cars, setCars] = useState([
        {
        model: 'Marea Turbo',
        price: 200000,
        photo: MareaPic,
        description: "explosivo vai de 0 a 100 em segundos!!!"
        },
        {
        model: 'Fusca Bolado',
        price: 400000,
        photo: FuscaPic,
        description: "Mais rápido que uma flecha!"
        },
        {
        model: 'Marea Turbo',
        price: 200000,
        photo: MareaPic,
        description: "explosivo vai de 0 a 100 em segundos"
        },
        {
            model: 'Marea Turbo',
            price: 20000,
            photo: MareaPic,
            description: "explosivo vai de 0 a 100 em segundos!!!"
        },
        {
            model: 'Marea Turbo',
            price: 20000,
            photo: MareaPic,
            description: "explosivo vai de 0 a 100 em segundos explosivo vai de 0 a 100 em segundos explosivo vai de 0 a 100 em segundos explosivo vai de 0 a 100 em segundos"
        },
        {
            model: 'Marea Turbo',
            price: 20000,
            photo: MareaPic,
            description: "explosivo vai de 0 a 100 em segundos"
        },

    ])

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
                        {cars.map(car =>
                            <CarCard car={car}/>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

