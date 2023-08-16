import Image from "next/image";
import { Button } from "@/components";

import photo_1 from "@/accets/img/about1_1x.png";
import photo_2 from "@/accets/img/about2_1x.png";
import photo_3 from "@/accets/img/about3_1x.png";

export const About = () => {
  return (
    <section className="container">
      <div className=" section__about">
        <div className="about__right">
          <div className="about__leftImg">
            <Image
              src={photo_1}
              alt="Photo of building"
              width={270}
              hieght={265}
            />
            <Image
              src={photo_3}
              alt="Photo of building"
              className="about_photo2"
              width={270}
              hieght={345}
            />
          </div>
          <div className="about__rightImg">
            <Image
              src={photo_2}
              alt="Photo of building"
              width={270}
              hieght={170}
            />
          </div>
        </div>
        <div className="about__left">
          <h2 className="section__title">О компании</h2>
          <p className="about__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button text={"Читать"} isDark={false} path={"/ourcertificate"} />
        </div>
      </div>
    </section>
  );
};
