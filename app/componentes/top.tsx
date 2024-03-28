
import style from './modulos/top.module.css';


type Props = {
  children?: React.ReactNode;
};

const Top = ({ children }: Props) => {
  return <div className={style.top}>{children}</div>;
};

export default Top;