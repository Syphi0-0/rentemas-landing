import style from "./modulos/nav.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Logo from "/public/Logo Rentemas Horizontal.png";
import Num from "../componentes/num";
import Image from "next/image";
import txt from "../componentes/modulos/alltextos.module.css";

type Props = {
  children?: React.ReactNode;
};
const montserrat = Montserrat({ subsets: ["latin"] });

const Nav = ({ children }: Props) => {
  return (
    <nav className={style.nav}>
      {children}
      <Link href={"/"}>
        <Image src={Logo} width={143} height={36} alt="Picture of the author" />
      </Link>
      <ul className={style.navc}>
        <Link className={txt.t12} href="/productos">
          PRODUCTOS Y SERVICIOS
        </Link>
      </ul>
      <ul className={style.navc}>
        <Link className={txt.t12} href="/nosotros">
          NOSOTROS
        </Link>
      </ul>
      <ul className={style.navc}>
        <Link className={txt.t12} href="/contacto">
          CONTACTO
        </Link>
      </ul>
      <Num>(614) 235 0078</Num>
    </nav>
  );
};

export default Nav;
