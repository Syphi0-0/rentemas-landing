"use client";
import style from "./clicktwo.module.css";
import Image from "next/image";
import React, { useState } from "react";

function Hovertwo() {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <div className={style.hover}>
      <div className={style.mcontainer}>
        <p className={style.mtxt}>ECOSANITARIOS PORTÁTILES</p>
        <button onClick={toggle} className={style.vrtxt}>
          {selected ? "Ver menos" : "Ver más"}
        </button>
      </div>
      {selected && (
        <div className={style.card}>
          <div className={style.bdytxt}>
            <h2 className={style.title}>ECOSANITARIOS PORTÁTILES</h2>
            <ul>
              <li>Sanitarios portátiles para construcción</li>
              <li>Sanitarios portátiles para minas</li>
              <li>Sanitarios portátiles para eventos</li>
            </ul>
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

export default Hovertwo;
