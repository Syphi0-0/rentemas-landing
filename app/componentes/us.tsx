import style from "./modulos/us.module.css";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

const Us = ({ children }: Props) => {
  return (
    <div className={style.us}>
      {children}
      <div className={style.space}></div>
      <div className={style.body}>
        <div className={style.imag}>
          <Image src={"/esta.png"} alt={"ola"} height={670} width={670}></Image>
        </div>
        <div className={style.imgop}>
          <div className={style.bigfoot}>
            <div className={style.utxt}>
              <div className={style.decor}>
                <img src="/boton.png" height="40px" width="70px" />
                <img src="/boton.png" height="40px" width="70px" />
              </div>
              <div>
                <h1 className={style.title}>NOSOTROS</h1>
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
