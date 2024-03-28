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
      <div className={tbdy.tbody}>
        <p className={txt.t15t}>ELLOS CONFÍAN EN NOSOTROS</p>
        <p className={txt.t15}>
          “Yo trabajo con Rentemas porque tienen maquinaria en buen estado y si
          me falla la máquina me la cambian.”
        </p>
      </div>
      <p className={txt.t15r}>VALLEKAS Santiago Pérez B.</p>
    </div>
  );
};

export default Trust;
