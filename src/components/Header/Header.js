"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSvg from "@/accets/svg/logo.svg";
import { navLinks } from "@/Constants";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container header_container ">
      <Link href="/">
        <Image src={logoSvg} alt="Company logo" />
      </Link>

      <nav>
        <ul className="nav_list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  className={isActive ? "navLink--active" : "navLink"}
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
