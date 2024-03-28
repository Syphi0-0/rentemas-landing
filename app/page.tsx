import React from "react";

import Container from "./componentes/container";
import Top from "./componentes/top";
import Nav from "./componentes/nav";
import Sec from "./componentes/second";
import S_photo from "./componentes/secphoto";
import Us from "./componentes/us";
import Clients from "./componentes/clients";
import Trust from "./componentes/trust";
import Map from "./componentes/map";
import Contact from "./componentes/contact";
import Foot from "./componentes/footer";
import Carrusel from "./componentes/carrusel";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Index() {
  return (
    <main className={montserrat.className}>
      <Container>
        <Top>
          <Carrusel />
          <Nav></Nav>
        </Top>
        <Sec>
          <S_photo></S_photo>
        </Sec>
        <Us></Us>
        <Clients></Clients>
        <Trust></Trust>
        <Map></Map>
        <Contact></Contact>
        <Foot></Foot>
      </Container>
    </main>
  );
}
