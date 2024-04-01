"use client";
import style from "./clickthree.module.css";
import Image from "next/image";
import React, { useState } from "react";

function Hoverthree() {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <div className={style.hover}>
      <div className={style.mcontainer}>
        <p className={style.mtxt}>RECUBRIMIENTOS INDUSTRIALES</p>
        <button onClick={toggle} className={style.vrtxt}>
          {selected ? "Ver menos" : "Ver más"}
        </button>
      </div>
      {selected && (
        <div className={style.card}>
          <div className={style.bdytxt}>
            <h2 className={style.title}>RECUBRIMIENTOS INDUSTRIALES</h2>
            <ul>
              <li>Reparación de pisos de concreto en naves industriales</li>
              <li>
                Pisos epóxicos resistentes a químicos, anti derrapantes,
                antiestáticos, morteros epoxicos, etc.
              </li>
              <li>Pisos especiales para industria alimenticia.</li>
              <li>Pulidos de pisos de concreto.</li>
            </ul>
            <button onClick={toggle} className={style.vrtxt}>
              {selected ? "Ver menos" : "Ver más"}
            </button>
          </div>
          <div className={style.bdyimg}>
            <Image
              width={300}
              height={420}
              src={"/hoveroneimg1.png"}
              alt={"lacaca2"}
            />
            <Image
              width={300}
              height={420}
              src={"/hoveroneimg2.png"}
              alt={"lacaca3"}
            />
            <Image
              width={300}
              height={420}
              src={"/hoveroneimg3.png"}
              alt={"lacaca4"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hoverthree;
