import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";

import img1 from "@/accets/img/ourProjects1_1x.png";
import img2 from "@/accets/img/ourProjects2_1x.png";
import img3 from "@/accets/img/ourProjects3_1x.png";
import img4 from "@/accets/img/ourProjects4_1x.png";
import img5 from "@/accets/img/ourProjects5_1x.png";
import rightErrowSvg from "@/accets/svg/errow.svg";

export const OurPprojects = () => {
  return (
    <section className="container">
      <h3 className="section__title">Наши проекты</h3>
      <div className="projects__imgWrap">
        <Link href="/#" className="projects_link">
          <h4 className="projects__title">Досуговый центр</h4>
          <div className="projects__textWrap ">
            <p className="projects__text">Подробнее</p>
            <Image src={rightErrowSvg} alt="Right errow" />
          </div>
        </Link>
        <Image src={img2} alt="Photo of building" />
        <Image src={img3} alt="Photo of building" />
        <Image src={img4} alt="Photo of building" />
        <Image src={img5} alt="Photo of building" />
      </div>
      <div className="projects__btnWrap">
        <Button text={"Все проекты"} isDark={true} path={"/ourprojects"} />
      </div>
    </section>
  );
};
