import style from './bottom.module.css';

type Props = {
  children?: React.ReactNode;
};

const Hoverone = ({ children }: Props) => {
  return <div className={style.body}>{children}
  <div className={style.top}><p className={style.Rfont}>7 Razones para trabajar con nosotros</p></div>
  <div className={style.container}>
  <div className={style.minis}><p className={style.bigfont}>1</p><p className={style.normalfont}>Tenemos una trayectoria de más de 50 años de honestidad probada.</p></div>
  <div className={style.minis}><p className={style.bigfont}>2</p><p className={style.normalfont}>Servicio, la maquinaria que se renta se revisa por rutina de manera diaria para optimizar tiempos.
</p></div>
  <div className={style.minis}><p className={style.bigfont}>3</p><p className={style.normalfont}>Garantía inmediata en compra de equipo nuevo. </p></div>
  <div className={style.minis}><p className={style.bigfont}>4</p><p className={style.normalfont}>Únicos en alta disponibilidad y variedad de lo que necesitan nuestros clientes, gracias a nuestro stock.</p></div>
  <div className={style.minis}><p className={style.bigfont}>5</p><p className={style.normalfont}>El mejor tiempo de respuesta del mercado.</p></div>
  <div className={style.minis}><p className={style.bigfont}>6</p><p className={style.normalfont}>Innovación a nuevos servicios para el cliente (sanitarios portátiles, reparación de pisos de concreto).</p></div>
  <div className={style.minis}><p className={style.bigfont}>7</p><p className={style.normalfont}>Confiabilidad, manejamos sólo marcas acreditadas y contamos con las refacciones, lo que respalda la compra.</p></div>
  </div>
  </div>;
};

export default Hoverone;