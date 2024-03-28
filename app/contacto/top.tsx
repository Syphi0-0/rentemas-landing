import style from "./top.module.css";

type Props = {
  children?: React.ReactNode;
};

const Top = ({ children }: Props) => {
  return (
    <div className={style.top}>
      {children}
      <div className={style.mtxt}>
        <h1 className={style.title}>¡CONTÁCTANOS!</h1>
      </div>
    </div>
  );
};

export default Top;
