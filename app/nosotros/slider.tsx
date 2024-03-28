"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./proveedores.module.css";
import Image from "next/image";

class Proveedores extends Component {
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
          <p className={style.ctxt}>NUESTROS CLIENTES</p>
          <div className={style.cslider}>
            <Slider className={style.slider} {...settings}>
              <div className={style.inside}>
                <Image
                  height={110}
                  width={170}
                  src={"/cipsa.png"}
                  alt={"una"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={50}
                  width={155}
                  src={"/2560px-Wacker_Neuson_logo.png"}
                  alt={"dos"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={60}
                  width={175}
                  src={"/Be-blade-logo-2.png"}
                  alt={"tre"}
                />
              </div>
              <div className={style.inside}>
                <Image height={50} width={205} src="/GJOPER1.png" alt={"cua"} />
              </div>
              <div className={style.inside}>
                <Image
                  height={50}
                  width={200}
                  src={"/Kohler_logo.png"}
                  alt={"cin"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={255}
                  width={255}
                  src={"/honda-9.png"}
                  alt={"sei"}
                />
              </div>
              <div className={style.inside}>
                <Image
                  height={40}
                  width={115}
                  src={"/Robin_Subaru-logo-3B0D31B235-seeklogo.png"}
                  alt={"ie"}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Proveedores;
