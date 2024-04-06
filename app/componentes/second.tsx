import style from "./modulos/second.module.css";
import txt from "./modulos/alltextos.module.css";
import Wpp from "/public/.png";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

const Sec = ({ children }: Props) => {
  return (
    <div className={style.second}>
      {children}
      <div className={style.secndt}>
        <h1 className={txt.t24w}>Productos y Servicios</h1>
        <ul id="lista" className={txt.t15c}>
          <li className={txt.t15c}>
            Renta, venta y reparación de maquinaria ligera para construcción y
            motores pequeños de las mejores marcas.
          </li>
          <li className={txt.t15c}>
            Taller mecánico para motores pequeños y maquinaria ligera.
          </li>
          <li className={txt.t15c}>
            La mejor herramienta manual para concreto MARSHALLTOWN.
          </li>
          <li className={txt.t15c}>
            EcoSanitarios portátiles para construcción, minas y eventos.
          </li>
          <li className={txt.t15c}>
            Pulido de pisos de concreto y pisos epóxicos para naves
            industriales.
          </li>
        </ul>
        <Link className={style.btxt} href="/productos">
          <p className={style.boton}>
            <img src="/poligono.png" alt="poligono" />
            Ver más
          </p>
        </Link>
      </div>
      <div className={style.wpp}>
        <a>
          <Image src={Wpp} alt={"wpp"} height={56} width={56}></Image>
        </a>
      </div>
    </div>
  );
};

export default Sec;
