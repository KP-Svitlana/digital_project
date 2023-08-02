import Link from "next/link";
import Image from "next/image";
import errowSvg from "@/accets/svg/errow.svg";
import errowSvgDark from "@/accets/svg/rightErrowBlack.svg";

export const Button = ({ text, isDark, type }) => {
  return (
    <>
      {type ? (
        <button type={type} className={isDark ? "button" : "button--white"}>
          {text}
          <Image src={isDark ? errowSvg : errowSvgDark} alt="Errow" />
        </button>
      ) : (
        <Link href="#" className={isDark ? "button" : "button--white"}>
          {text}
          <Image src={isDark ? errowSvg : errowSvgDark} alt="Errow" />
        </Link>
      )}
    </>

    // <Link href="#" className={isDark ? "button" : "button--white"}>
    //   {text}
    //   <Image src={isDark ? errowSvg : errowSvgDark} alt="Errow" />
    // </Link>
  );
};
