"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "./modulos/trust.module.css";
import txt from "./modulos/alltextos.module.css";
import tbdy from "./modulos/trustbody.module.css";

type Props = {
  children?: React.ReactNode;
};

const Trust = ({ children }: Props) => {
  return (
    <div className={style.trust}>
      {children}
      <p className={txt.t15t}>ELLOS CONFÍAN EN NOSOTROS</p>
      <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false}>
        <div className={tbdy.tbody}>
          <div>
            <p className={txt.t15}>
              “Yo trabajo con Rentemas porque tienen maquinaria en buen estado y
              si me falla la máquina me la cambian.”
            </p>
          </div>
          <div>
            <p className={txt.t15r}>VALLEKAS Santiago Pérez B.</p>
          </div>
        </div>
        <div className={tbdy.tbody}>
          <div>
            <p className={txt.t15}>
              “Yo trabajo con Rentemas porque tienen maquinaria en buen estado y
              si me falla la máquina me la cambian.”
            </p>
          </div>
          <div>
            <p className={txt.t15r}>VALLEKAS Santiago Pérez B.</p>
          </div>
        </div>
        <div className={tbdy.tbody}>
          <div>
            <p className={txt.t15}>
              “Yo trabajo con Rentemas porque tienen maquinaria en buen estado y
              si me falla la máquina me la cambian.”
            </p>
          </div>
          <div>
            <p className={txt.t15r}>VALLEKAS Santiago Pérez B.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Trust;
