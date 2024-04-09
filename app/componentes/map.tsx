import style from "./modulos/map.module.css";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
};

const Map = ({ children }: Props) => {
  return (
    <div className={style.map}>
      {children}
      <Image src={"/mapa.png"} alt={"map"} height={563} width={1512} />
    </div>
  );
};

export default Map;
