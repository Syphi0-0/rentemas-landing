import style from "./modulos/top.module.css";
import Nav from "./nav";

type Props = {
  children?: React.ReactNode;
};

const Top = ({ children }: Props) => {
  return (
    <div className={style.top}>
      <Nav></Nav>
      {children}
    </div>
  );
};

export default Top;
