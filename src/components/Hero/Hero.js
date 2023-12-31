import Image from "next/image";
import { Button } from "@/components";

import rightErrowSvg from "@/accets/svg/rightErrowBlack.svg";
import leftErrowSvg from "@/accets/svg/leftErrow.svg";
import heroImg from "@/accets/img/hero_3x.png";

export const Hero = () => {
  return (
    <section className="container section__hero ">
      <div>
        <h1 className="section__title hero__title">
          Project <br /> <span className="title__span">Home</span>
        </h1>
        <div className="hero__btnWrap">
          <button type="button" className="hero__btn">
            <Image src={leftErrowSvg} alt="Left errow" />
          </button>
          <button type="button" className="hero__btn">
            <Image src={rightErrowSvg} alt="Right errow" />
          </button>
        </div>
        <div className="hero__numBtnWrap">
          <button type="button" className="hero__numBtn">
            01
          </button>
          <button type="button" className="hero__numBtn">
            02
          </button>
        </div>
      </div>
      <div className="hero__imgWrap">
        <Image
          src={heroImg}
          width={770}
          hieght={829}
          alt="Photo of building"
          className="hero__img"
        />
        <div className="btnWpap">
          <Button text={"Взглянуть"} isDark={false} path={"/gallery"} />
        </div>
      </div>
    </section>
  );
};
