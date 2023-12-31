import Image from "next/image";

import { ContactUsForm } from "@/components";

import img from "@/accets/img/contactUs_1x.png";

export const ContactUs = () => {
  return (
    <section className="container">
      <h3 className="section__title">Связаться с нами</h3>
      <div className="formWrap">
        <ContactUsForm />
        <div>
          <Image
            src={img}
            alt="Photo of a man making a call"
            width={749}
            hieght={369}
          />
        </div>
      </div>
    </section>
  );
};
