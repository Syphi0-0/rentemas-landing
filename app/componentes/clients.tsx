"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./modulos/clients.module.css";
import Image from "next/image";

class Clients extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      showArrows: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      cssEase: "linear",
    };
    return (
      <div className={style.clientes}>
        <div className={style.cbdy}>
          <div className={style.title}>
            <p className={style.ctxt}>NUESTROS CLIENTES</p>
          </div>
          <div className={style.cslider}>
            <Slider className={style.slider} {...settings}>
              <div className={style.inside}>
                <Image
                  height={50}
                  width={200}
                  src="/2560px-Logo_Safran.png"
                  alt={"safran"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={115}
                  width={110}
                  src="/american ind.png"
                  alt={"ai"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={65}
                  width={160}
                  src="/Xylem_Logo.png"
                  alt={"xylem"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={60}
                  width={205}
                  src="/costco-wholesale 1.png"
                  alt={"costco"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={55}
                  width={50}
                  className={style.penoles}
                  src="/800px-Penoles_Logo.png"
                  alt={"penoles"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={50}
                  width={150}
                  src="/Fresnillo_PLC_Logo.png"
                  alt={"fresno"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={65}
                  width={185}
                  src="/logotipo_horizontal.png"
                  alt={"gob"}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
