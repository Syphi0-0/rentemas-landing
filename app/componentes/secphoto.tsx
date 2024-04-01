import style from "./modulos/secphoto.module.css";
import txt from "./modulos/alltextos.module.css";

type Props = {
  children?: React.ReactNode;
};

const S_photo = ({ children }: Props) => {
  return (
    <div className={style.secphoto}>
      {children}
      <div className={style.dphoto}>
        <div className={style.imgone}>
          <h1 className={txt.t15w}>
            EQUIPO DE CONSTRUCCIÓN Y MAQUINARIA LIGERA EN RENTA Y VENTA
          </h1>
          <p className={txt.t15c}>
            Mejora la eficiencia, seguridad, versatilidad y precisión en
            proyectos de construcción
          </p>
        </div>
        <div className={style.imgtwo}>
          <h1 className={txt.t15w}>ECOSANITARIOS PORTÁTILESs</h1>
          <p className={txt.t15c}>
            Portátiles Instalaciones sanitarias temporales en lugares donde no
            hay acceso a infraestructura de baños convencionales.
          </p>
        </div>
        <div className={style.imgthree}>
          <h1 className={txt.t15w}>RECUBRIMIENTOS INDUSTRIALES</h1>
          <p className={txt.t15c}>
            Una solución versátil y efectiva para proteger, mejorar y prolongar
            la vida útil de diversas superficies en entornos industriales y
            comerciales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default S_photo;
