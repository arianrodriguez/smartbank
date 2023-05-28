import React from "react";

import alimentacion from "../src/assets/images/alimentacion.svg"
import otros from "../src/assets/images/otros.svg"
import utilidades from "../src/assets/images/utilidades.svg"
import salud from "../src/assets/images/salud.svg"
import transporte from "../src/assets/images/transporte.svg"
import {Icono} from "./Components/UI"

export default (type) => {
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="Alimentacion"/>,
        Utilidades:  <Icono src={utilidades} alt="utilidades"/>,
        Salud:  <Icono src={salud} alt="salud"/>,
        Transporte:  <Icono src={transporte} alt="transporte"/>,
        default:  <Icono src={otros} alt="otros"/>
    };

    return Images[type] || Images["default"];
};
