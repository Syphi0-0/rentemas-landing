import style from "./modulos/us.module.css";
import Image from "next/image";
import back from "/public/WhatsApp Image 2024-02-15 at 3.42 1.png";

type Props = {
  children?: React.ReactNode;
};

const Us = ({ children }: Props) => {
  return (
    <div className={style.us}>
      {children}
      <div className={style.body}>
        <div className={style.img}></div>
        <div className={style.imgop}>
          <div className={style.bigfoot}>
            <div className={style.utxt}>
              <div>
                <h1 className={style.title}>nosotros</h1>
              </div>
              <p className={style.bdytxt}>
                Grupo Rentemas comenzó en 1969 con la renta de maquinaria ligera
                para construcción en la ciudad de Chihuahua. A lo largo de más
                de 50 años hemos evolucionado con nuevos servicios como lo son
                la venta de maquinaria y herramienta para concreto, Sanitarios
                portátiles y reparación de pisos de concreto con epóxicos
                especializados.
              </p>
            </div>
            <div className={style.smallfoot}>
              <p className={style.foottxt}>¡Conócenos!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
