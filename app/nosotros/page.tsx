import React from "react";
import { Montserrat } from "next/font/google";
import Top from "./top";
import Middle from "./middle";
import Bottom from "./bottom";

import Proveedores from "./slider";
import Foot from "../componentes/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function scndpage() {
  return (
    <main className={montserrat.className}>
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
      <Proveedores></Proveedores>
      <Foot></Foot>
    </main>
  );
}
