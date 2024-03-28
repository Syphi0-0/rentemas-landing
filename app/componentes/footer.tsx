import style from "./modulos/footer.module.css";
import Image from "next/image";
import face from "/public/.png";
import inverted from "/public/Layer_1.png";

type Props = {
  children?: React.ReactNode;
};

const Foot = ({ children }: Props) => {
  return (
    <div className={style.footer}>
      {children}
      <div className={style.split}>
        <div className={style.frstsplit}>
          <div className={style.img}>
            <Image
              src={inverted}
              width={175}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <p className={style.wtxt}>NAV</p>
          <a className={style.ltxt} href="/productos">
            PRODUCTOS Y SERRVICIOS
          </a>
          <a className={style.ltxt} href="/nosotros">
            NOSOTROS
          </a>
          <a className={style.ltxt} href="/contacto">
            CONTACTO
          </a>
        </div>
        <div className={style.frstsplit}>
          <p className={style.wtxt}>CONTACTO</p>
          <div>
            <p className={style.ltxt}>Whatsapp (614) 235 0078</p>
            <p className={style.ltxt}>Oficina (614) 413 5000</p>
          </div>
          <p className={style.ltxt}>contacto@rentemas.com</p>
          <p className={style.ltxt}>
            Rio de Janeiro 516, Panamericana, 31210 Chihuahua, Chih.
          </p>
        </div>
      </div>
      <div className={style.split}>
        <div className={style.scndsplit}>
          <div className={style.oothersplit}>
            <p className={style.wtxt}>REDES SOCIALES</p>
            <Image src={face} alt={"faceboob"} width={16} height={16} />
          </div>
          <div className={style.othersplit}>
            <p className={style.midtxt}>
              © Copyright 2020 - 2023 Diseño hecho por Deadline | Todos los
              Derechos Reservados Aviso de Privacidad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
