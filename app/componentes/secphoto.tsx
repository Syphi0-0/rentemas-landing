import style from "./modulos/secphoto.module.css";
import Image from "next/image";
import web1 from "/public/WhatsApp Image 2024-02-27 at 3.48 1.png";
import web2 from "/public/ventajas-de-la-maquinaria-ligera-en-la-construccion 1.png";
import web3 from "/public/maxresdefault 3.png";
import imash from "./modulos/img.module.css";
import dphoto from "./modulos/divphoto.module.css";
import txt from "./modulos/alltextos.module.css";

type Props = {
  children?: React.ReactNode;
};

const S_photo = ({ children }: Props) => {
  return (
    <div className={style.secphoto}>
      {children}
      <div className={dphoto.dphoto}>
        <div className={imash.img}>
          <h1 className={txt.t15w}>
            EQUIPO DE CONSTRUCCIÓN Y MAQUINARIA LIGERA EN RENTA Y VENTA
          </h1>
          <p className={txt.t15c}>
            Mejora la eficiencia, seguridad, versatilidad y precisión en
            proyectos de construcción
          </p>
        </div>
        <Image src={web2} height={340} width={340} alt="logo"></Image>
      </div>
      <div className={dphoto.dphoto}>
        <div className={imash.img}>
          <h1 className={txt.t15w}>ECOSANITARIOS PORTÁTILESs</h1>
          <p className={txt.t15c}>
            Portátiles Instalaciones sanitarias temporales en lugares donde no
            hay acceso a infraestructura de baños convencionales.
          </p>
        </div>
        <Image src={web1} height={340} width={500} alt="logo"></Image>
      </div>
      <div className={dphoto.dphoto}>
        <div className={imash.img}>
          <h1 className={txt.t15w}>RECUBRIMIENTOS INDUSTRIALES</h1>
          <p className={txt.t15c}>
            Una solución versátil y efectiva para proteger, mejorar y prolongar
            la vida útil de diversas superficies en entornos industriales y
            comerciales.
          </p>
        </div>
        <Image src={web3} height={340} width={340} alt="logo"></Image>
      </div>
    </div>
  );
};

export default S_photo;
