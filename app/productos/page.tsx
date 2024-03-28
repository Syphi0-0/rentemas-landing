import React from "react";
import { Montserrat } from "next/font/google";
import Top from "./top";
import Hoverone from "./clickone";
import Hovertwo from "./clicktwo";
import Hoverthree from "./clickthree";
import top from "./top.module.css";
import Nav from "./nav";
import Foot from "../componentes/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function scndpage() {
  return (
    <main className={montserrat.className}>
      <Top>
        <Nav></Nav>
        <div className={top.mtxt}>
          <h1 className={top.title}>PRODUCTOS Y SERVICIOS</h1>
          <ul className={top.list}>
            <li>
              <p className={top.btxt}>
                Renta, venta y reparación de maquinaria ligera para construcción
                y motores pequeños de las mejores marcas.
              </p>
            </li>
            <li>
              <p className={top.btxt}>
                Taller mecánico para motores pequeños y maquinaria ligera.  
              </p>
            </li>
            <li>
              <p className={top.btxt}>
                La mejor herramienta manual para concreto MARSHALLTOWN.
              </p>
            </li>
            <li>
              <p className={top.btxt}>
                EcoSanitarios portátiles paa construcción, minas y eventos.
              </p>
            </li>
            <li>
              <p className={top.btxt}>
                Pulido de pisos de concretoy pisos epóxicos para naves
                industriales
              </p>
            </li>
          </ul>
        </div>
      </Top>
      <Hoverone></Hoverone>
      <Hovertwo></Hovertwo>
      <Hoverthree></Hoverthree>
      <Foot></Foot>
    </main>
  );
}
