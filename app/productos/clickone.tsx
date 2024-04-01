"use client";
import style from "./clickone.module.css";
import Image from "next/image";
import React, { useState } from "react";

function Hoverone() {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <div className={style.hover}>
      <div className={style.mcontainer}>
        <p className={style.mtxt}>
          EQUIPO DE CONSTRUCCIÓN Y MAQUINARIA LIGERA EN RENTA Y VENTA
        </p>
        <button onClick={toggle} className={style.vrtxt}>
          {selected ? "Ver menos" : "Ver más"}
        </button>
      </div>
      {selected && (
        <div className={style.card}>
          <div className={style.bdytxt}>
            <h2 className={style.title}>
              EQUIPO DE CONSTRUCCIÓN Y MAQUINARIA LIGERA EN RENTA Y VENTA.
            </h2>
            <ul>
              <li>
                Maquinaria ligera de las mejores marcas como CIPSA MQ, JOPER,
                ENAR, MAKITA, ETC.
              </li>
              <li>
                Bailarinas jaguar, vibradores de gasolina y eléctricos,
                revolvedoras, rompedores, cinceladoras, plantas de luz,
                soldadoras.
              </li>
              <li>
                Motores pequeños de las mejores marcas como Kohler, Honda,
                Robin, Subaru, etc.
              </li>
              <li>Refacciones para esta maquinaria y motores.</li>
              <li>Herramienta para concreto marca MARSHALLTOWN.</li>
              <li>Discos diamantados para corte de concreto.</li>
            </ul>
            <button onClick={toggle} className={style.vrtxt}>
              {selected ? "Ver menos" : "Ver más"}
            </button>
          </div>
          <div className={style.bdyimg}>
            <div className={style.inimg}>
              <Image
                width={300}
                height={220}
                src={"/10752.jpg"}
                alt={"lacaca2"}
              />
              <Image
                width={300}
                height={220}
                src={"/14857.jpg"}
                alt={"lacaca2"}
              />
            </div>
            <div className={style.inimg}>
              <Image
                width={300}
                height={220}
                src={"/13739.jpg"}
                alt={"lacaca3"}
              />
              <Image
                width={300}
                height={220}
                src={"/13786.jpg"}
                alt={"lacaca3"}
              />
            </div>
            <div className={style.inimg}>
              <Image
                width={300}
                height={220}
                src={"/11571.jpg"}
                alt={"lacaca4"}
              />
              <Image
                width={300}
                height={220}
                src={"/14807.jpg"}
                alt={"lacaca4"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hoverone;
