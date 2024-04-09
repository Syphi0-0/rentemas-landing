import React from "react";
import { Montserrat } from "next/font/google";
import Top from "./top";
import Hoverone from "./clickone";
import Hovertwo from "./clicktwo";
import Hoverthree from "./clickthree";
import Nav from "./nav";
import Foot from "../componentes/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function scndpage() {
  return (
    <main className={montserrat.className}>
      <Top>
        <Nav></Nav>
      </Top>
      <Hoverone></Hoverone>
      <Hovertwo></Hovertwo>
      <Hoverthree></Hoverthree>
      <Foot></Foot>
    </main>
  );
}
