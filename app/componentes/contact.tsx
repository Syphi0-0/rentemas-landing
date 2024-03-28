import style from './modulos/contact.module.css';
import body from './modulos/contacto.module.css';
import main from './modulos/cmain.module.css';
import footer from './modulos/cfooter.module.css';
import inside from './modulos/cinside.module.css';
import cmodel from './modulos/cinmodel.module.css';

type Props = {
    children?: React.ReactNode;
  };
  
  const Contact = ({ children }: Props) => {
    return <div className={style.cont}>{children}
    <div className={main.cmain}>
    <div className={body.contacto}>
      <div className={inside.cinside}>
        <div className={cmodel.model}>
        <p className={cmodel.maintxt}>CONTACTO</p>
        <div className={cmodel.txtdiv}>
        <p className={cmodel.bodytxt}>Whatsapp (614) 235 0078 </p>
        <p className={cmodel.bodytxt}>Oficina (614) 413 5000</p>
        </div>
        <div className={cmodel.txtdiv}>
        <p className={cmodel.bodytxt}>contacto@rentemas.com</p>
        <p className={cmodel.bodytxt}>Rio de Janeiro 516, Panamericana, 31210 Chihuahua, Chih.</p>
        </div>
        <input className={cmodel.leftInput} placeholder='Tu nombre y/o empresa'/>
        <input className={cmodel.leftInput} placeholder='Correo electrónico'/>
        <input className={cmodel.leftInput} placeholder='Teléfono'/>
        </div>
      </div>
      <div className={inside.coppose}>
        <div className={cmodel.model}>
          <input className={cmodel.rightInput} placeholder='mensaje'/>
        </div>
      </div>
    </div >
    <div className={footer.cfooter}>
      <div className={cmodel.footer}>
        <p>Enviar</p>
      </div>
    </div>
    </div>
    </div>;
  };
  
  export default Contact;