import style from './hoverone.module.css';

type Props = {
  children?: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return <div className={style.body}>{children}
  </div>;
};

export default Body;