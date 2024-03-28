import style from './hoverone.module.css';

type Props = {
  children?: React.ReactNode;
};

const Right = ({ children }: Props) => {
  return <div className={style.right}>{children}
  <div className={style.rightTT}>
  <p className={style.wtxt}>VALORES</p>
  <p className={style.bdytxt} >Etica</p>
  <p className={style.bdytxt}>Respeto</p>
  <p className={style.bdytxt}>Profesionalismo</p>
  <p className={style.bdytxt}>Conciencia ambiental</p>
  <p className={style.bdytxt}>Reciclaje</p>
  </div>
  </div>;
};

export default Right;