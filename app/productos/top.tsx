import style from "./top.module.css";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

const Top = ({ children }: Props) => {
  return (
    <div className={style.top}>
      {children}
      <div className={style.mtxt}>
        <h1 className={style.title}>PRODUCTOS Y SERVICIOS</h1>
        <ul className={style.list}>
          <li>
            <p className={style.btxt}>
              Renta, venta y reparación de maquinaria ligera para construcción y
              motores pequeños de las mejores marcas.
            </p>
          </li>
          <li>
            <p className={style.btxt}>
              Taller mecánico para motores pequeños y maquinaria ligera.  
            </p>
          </li>
          <li>
            <p className={style.btxt}>
              La mejor herramienta manual para concreto MARSHALLTOWN.
            </p>
          </li>
          <li>
            <p className={style.btxt}>
              EcoSanitarios portátiles paa construcción, minas y eventos.
            </p>
          </li>
          <li>
            <p className={style.btxt}>
              Pulido de pisos de concretoy pisos epóxicos para naves
              industriales
            </p>
          </li>
        </ul>
      </div>
      <Image
        src={"/pexels-ksenia-chernaya-5691606 1.png"}
        alt={"newfondo"}
        height={511}
        width={1512}
      ></Image>
    </div>
  );
};

export default Top;
