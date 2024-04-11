import style from "./modulos/nav.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Logo from "/public/Logo Rentemas Horizontal.png";
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
      <div className={style.navc}>
        <Link href={"/"}>
          <Image
            src={Logo}
            width={143}
            height={36}
            alt="Picture of the author"
          />
        </Link>
        <ul>
          <Link className={txt.t12} href="/productos">
            PRODUCTOS Y SERVICIOS
          </Link>
        </ul>
        <ul>
          <Link className={txt.t12} href="/nosotros">
            NOSOTROS
          </Link>
        </ul>
        <ul>
          <Link className={txt.t12} href="/contacto">
            CONTACTO
          </Link>
        </ul>
      </div>
      <div className={style.num}>(614) 235 0078</div>
    </nav>
  );
};

export default Nav;
