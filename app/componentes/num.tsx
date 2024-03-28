import style from './modulos/num.module.css';

type Props = {
    children?: React.ReactNode;
  };
  
  const Num = ({ children }: Props) => {
    return <a className={style.num}>{children}</a>;
  };
  
  export default Num;