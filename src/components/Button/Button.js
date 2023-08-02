import Link from "next/link";
import Image from "next/image";
import errowSvg from "@/accets/svg/errow.svg";

export const Button = ({ text }) => {
  return (
    <Link href="#" className="button">
      {text}
      <Image src={errowSvg} alt="Errow" />
    </Link>
  );
};
