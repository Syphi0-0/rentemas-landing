import style from "./contact.module.css";
import main from "./hoverone.module.css";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

const Contact = ({ children }: Props) => {
  return (
    <div className={main.middle}>
      {children}
      <div className={style.cmain}>
        <Image src={"/mapa.png"} alt={"map"} height={413} width={1119} />
        <div className={style.cbody}>
          <div className={style.contacto}>
            <div className={style.cinside}>
              <div className={style.model}>
                <p className={style.maintxt}>CONTACTO</p>
                <div className={style.txtdiv}>
                  <p className={style.bodytxt}>Whatsapp (614) 235 0078 </p>
                  <p className={style.bodytxt}>Oficina (614) 413 5000</p>
                  <p>ola que tal</p>
                </div>
                <div className={style.txtdiv}>
                  <p className={style.bodytxt}>contacto@rentemas.com</p>
                  <p className={style.bodytxt}>
                    Rio de Janeiro 516, Panamericana, 31210 Chihuahua, Chih.
                  </p>
                </div>
                <input
                  className={style.leftInput}
                  placeholder="Tu nombre y/o empresa"
                />
                <input
                  className={style.leftInput}
                  placeholder="Correo electrónico"
                />
                <input className={style.leftInput} placeholder="Teléfono" />
              </div>
            </div>
            <div className={style.coppose}>
              <div className={style.model}>
                <input className={style.rightInput} placeholder="mensaje" />
              </div>
            </div>
          </div>
          <div className={style.cfooter}>
            <div className={style.footer}>
              <p>Enviar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
