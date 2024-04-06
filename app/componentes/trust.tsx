"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "./modulos/trust.module.css";
import txt from "./modulos/alltextos.module.css";

type Props = {
  children?: React.ReactNode;
};

const Trust = ({ children }: Props) => {
  return (
    <div className={style.trust}>
      {children}
      <p className={txt.t15t}>ELLOS CONFÍAN EN NOSOTROS</p>
      <div className={style.tbody}>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
        >
          <div className={style.tcarrusel}>
            <div>
              <p className={txt.t15}>
                “Yo trabajo con Rentemas porque tienen maquinaria en buen estado
                y si me falla la máquina me la cambian.”
              </p>
            </div>
            <div>
              <p className={txt.t15r}>VALLEKAS Santiago Pérez B.</p>
            </div>
          </div>
          <div className={style.tcarrusel}>
            <div>
              <p className={txt.t15}>
                “Compro máaquinas nuevas y si se echan a perder las reparan
                ellos mismos, dos servicios a la vez.
              </p>
            </div>
            <div>
              <p className={txt.t15r}>Contructora LERMA Ing. Manolo Lerma</p>
            </div>
          </div>
          <div className={style.tcarrusel}>
            <div>
              <p className={txt.t15}>
                “En Rentemas siempre me recomiendan qué me sirve más y qué me
                conviene más. A la hora de comprar equipo, me ofrecen varias
                opciones”
              </p>
            </div>
            <div>
              <p className={txt.t15r}>
                Constructora RASCON Ing. Alfonso Rascon
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Trust;
