import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/Constants";

import logo from "@/accets/svg/logo_footer.svg";
import mail from "@/accets/svg/mail.svg";
import phone from "@/accets/svg/phone.svg";
import map from "@/accets/svg/map.svg";

export const Footer = () => {
  return (
    <footer className="container footer__container">
      <Image className="footer__logo" src={logo} alt="logo" />
      <div className="footer__nav">
        <h4 className="footer__title">Информация</h4>
        <ul className="nav__list">
          {navLinks.map((link) => {
            return (
              <li key={link.label} className="nav__item">
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <address className="footer__address">
        <h4 className="footer__title">Контакты</h4>
        <ul className="adress__list">
          <li className="adress__item">
            <Link
              href="https://goo.gl/maps/m8wmNiAro4bf5xXo6"
              className="address__link"
            >
              <Image className="adress__icon" src={map} />
              100000, Республика Казахстан, <br /> г. Караганда, ул.
              Телевизионная 10
            </Link>
          </li>
          <li className="adress__item">
            <Link href="tel:+380000000000" className="address__link">
              <Image className="adress_icon" src={phone} />
              +38 (000) 000 00 00
            </Link>
          </li>
          <li className="adress__item">
            <Link href="mailto:mail@gmail.com" className="address__link">
              <Image className="adress_icon" src={mail} />
              mail@gmail.com
            </Link>
          </li>
        </ul>
      </address>

      {/* <div>
        <ul>
          <li>
            <Link>
              <Image />
            </Link>
          </li>
          <li>
            <Link>
              <Image />
            </Link>
            <li>
              <Link>
                <Image />
              </Link>
            </li>
            <li>
              <Link>
                <Image />
              </Link>
            </li>
          </li>
        </ul>
      </div>
      <div>
        <p></p>
      </div> */}
    </footer>
  );
};
