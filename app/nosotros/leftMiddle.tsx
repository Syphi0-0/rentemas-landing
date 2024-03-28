import style from './hoverone.module.css';

type Props = {
  children?: React.ReactNode;
};

const Left = ({ children }: Props) => {
  return <div className={style.left}>{children}
  <div className={style.leftTT}>
  <p className={style.rtxt}>NUESTRA MISIÓN</p>
  <p className={style.stxt} >Ser la empresa líder en soluciones para la construcción, industria y minería en el estado de chihuahua a través de nuestros múltiples servicios,
Garantizando la satisfacción de nuestros clientes al contar con un servicio de calidad realizado por un personal capacitado
Y por nuestros proveedores para convivir en armonía con la comunidad y el medio ambiente</p>
  </div>
  <div className={style.leftTT}>
  <p className={style.rtxt}>NUESTRA VISIÓN</p>
  <p className={style.stxt} >Llegar a ser la empresa #1 en ventas, rentas y servicios en construcción,   
industria y minería con el mejor servicio  en calidad y precio, siempre
trabajando con ética profesional y respeto.</p>
  </div>
  </div>;
};

export default Left;