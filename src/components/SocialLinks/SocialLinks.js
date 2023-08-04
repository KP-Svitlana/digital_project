import Image from "next/image";
import Link from "next/link";

import facebookSvg from "@/accets/svg/facebook.svg";
import linkedinSvg from "@/accets/svg/linkedIn.svg";
import pinterestSvg from "@/accets/svg/pininterest.svg";
import twitterSvg from "@/accets/svg/twitter.svg";

export const SocialLinks = () => {
  return (
    <div className="social">
      <h3 className="footer__title">Социальные сети</h3>
      <ul className="social__list">
        <li className="social__item">
          <Link className="social__link" href="https://uk-ua.facebook.com/">
            <Image src={facebookSvg} alt="Link to facebook" />
          </Link>
        </li>
        <li className="social__item">
          <Link className="social__link" href="https://twitter.com/?lang=ua">
            <Image src={twitterSvg} alt="Link to twitter" />
          </Link>
        </li>
        <li className="social__item">
          <Link className="social__link" href="https://www.linkedin.com/">
            <Image src={linkedinSvg} alt="Link to lincedin" />
          </Link>
        </li>
        <li className="social__item">
          <Link className="social__link" href="https://ru.pinterest.com/">
            <Image src={pinterestSvg} alt="Link to pinterest" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
