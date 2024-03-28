import style from './hoverone.module.css';

type Props = {
  children?: React.ReactNode;
};

const Hoverone = ({ children }: Props) => {
  return <div className={style.body}>{children}
  </div>;
};

export default Hoverone;