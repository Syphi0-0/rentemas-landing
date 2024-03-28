import React from "react";
import { Montserrat } from "next/font/google";
import Top from "./top";
import Body from "./body";
import Middle from "./middle";
import Nav from "./nav";
import Foot from "../componentes/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function scndpage() {
  return (
    <main className={montserrat.className}>
      <Top>
        <Nav></Nav>
      </Top>
      <Body>
        <Middle></Middle>
      </Body>
      <Foot></Foot>
    </main>
  );
}
