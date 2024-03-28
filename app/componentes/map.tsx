import style from "./modulos/map.module.css";

type Props = {
  children?: React.ReactNode;
};

const Map = ({ children }: Props) => {
  return <div className={style.map}>{children}</div>;
};

export default Map;
