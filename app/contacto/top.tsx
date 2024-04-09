import style from "./top.module.css";
import Image from "next/image";

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
      <Image
        src={"/WhatsApp Image 2024-02-15 at 3.42 .png"}
        alt={"newfondo"}
        height={684}
        width={1512}
      ></Image>
    </div>
  );
};

export default Top;
