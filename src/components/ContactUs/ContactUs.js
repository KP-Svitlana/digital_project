import { Button } from "@/components/Button";
import Image from "next/image";

import img from "@/accets/img/contactUs_1x.png";

export const ContactUs = () => {
  return (
    <section className="container">
      <h3 className="section__title">Связаться с нами</h3>
      <div className="formWrap">
        <Image src={img} alt="Photo of a man making a call" />
      </div>
      <Button text={"отправить"} isDark={true} type={"submit"} />
    </section>
  );
};
