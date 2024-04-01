"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Text from "./text";
import TextT from "./text2";
import style from "./modulos/carrusel.module.css";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

const carrusel = ({ children }: Props) => {
  return (
    <div>
      {children}
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        stopOnHover={true}
      >
        <div className={style.backg}>
          <Text>
            <h1 className={style.title}>
              COTIZA TU OBRA. ¡NOSOTROS TE AYUDAMOS!
            </h1>
            <p className={style.medium}>
              Con más de 50 años de experiencia en el sector, ofrecemos una
              amplia gama de servicios industriales y de construcción. Nuestro
              equipo altamente capacitado y nuestra flota de equipos modernos
              garantizan eficiencia, seguridad y calidad en cada proyecto.
              Confía en nosotros para superar cualquier desafío y llevar tus
              proyectos al siguiente nivel.
            </p>
            <Link className={style.btxt} href="/contacto">
              <p className={style.boton}>
                <img
                  src="/boton.png"
                  alt="poligono"
                  height="25px"
                  width="35px"
                />
                Contáctanos
              </p>
            </Link>
          </Text>
          <img src="maxresdefault 2.png" />
        </div>
        <div className={style.scndbackg}>
          <Text>
            <h2 className={style.title}>Tenemos tambien para ti...</h2>
            <p className={style.hugetxt}>
              BAÑOS<b className={style.hugered}>PORTÁTILES</b> ECO
              <b className={style.hugered}>SANITARIOS</b>
            </p>
            <p className={style.medium}>
              Para eventos al aire libre, sitios de construcción o lugares donde
              se requiere una solución temporal debido mantenimiento.
            </p>
            <Link className={style.btxt} href="/productos">
              <p className={style.boton}>
                <img
                  src="/boton.png"
                  alt="poligono"
                  height="25px"
                  width="35px"
                />
                <>Ver más</>
              </p>
            </Link>
          </Text>
          <img src="/RENTEMAS WEB_Mesa de trabajo 1 2.png" />
        </div>
        <div className={style.thrdbackg}>
          <Text>
            <h1 className={style.xltxt}>TODA LA HERRAMIENTA</h1>
            <p className={style.xxltxt}>MARSHALLTOWN</p>
            <Link className={style.btxt} href="/productos">
              <p className={style.boton}>
                <img
                  src="/boton.png"
                  alt="poligono"
                  height="25px"
                  width="35px"
                />
                <>Ver más</>
              </p>
            </Link>
          </Text>
          <img src="/RENTEMAS WEB-02 2.png" />
        </div>
        <div className={style.frthbackg}>
          <TextT>
            <h1 className={style.xltxt}>
              VENTA DE <b className={style.redxl}>MAQUINARÍA LIGERA</b>
            </h1>
            <p className={style.medium}>
              Contamos con gran variedad de tipos y tamaños para adaptarse a
              diferentes tipos de proyectos y necesidades específicas
            </p>
            <Link className={style.btxt} href="/productos">
              <p className={style.boton}>
                <img
                  src="/boton.png"
                  alt="poligono"
                  height="25px"
                  width="35px"
                />
                <>Ver más</>
              </p>
            </Link>
          </TextT>
          <img src="/RENTEMAS WEB_Mesa de trabajo 1 copia 1.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default carrusel;
