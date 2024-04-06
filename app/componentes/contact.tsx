import style from "./modulos/contact.module.css";

type Props = {
  children?: React.ReactNode;
};

const Contact = ({ children }: Props) => {
  return (
    <div className={style.cont}>
      {children}
      <div className={style.cmain}>
        <div className={style.contacto}>
          <div className={style.cinside}>
            <div className={style.model}>
              <div className={style.upper}>
                <p className={style.maintxt}>CONTACTO</p>
                <div className={style.txtdiv}>
                  <p className={style.bodytxt}>Whatsapp (614) 235 0078 </p>
                  <p className={style.bodytxt}>Oficina (614) 413 5000</p>
                </div>
                <div className={style.txtdiv}>
                  <p className={style.bodytxt}>contacto@rentemas.com</p>
                  <p className={style.bodytxt}>
                    Rio de Janeiro 516, Panamericana, 31210 Chihuahua, Chih.
                  </p>
                </div>
              </div>
              <div className={style.downer}>
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
          </div>
          <div className={style.coppose}>
            <div className={style.opmodel}>
              <div className={style.opdowner}>
                <input className={style.rightInput} placeholder="mensaje" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.cfooter}>
          <div>
            <button className={style.footer}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
