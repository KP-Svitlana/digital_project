"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSvg from "@/accets/svg/logo.svg";
import { navLinks } from "@/Constants";

// const navLinks = [
//   { href: "/", label: "Главная" },
//   { href: "#", label: "Галерея" },
//   { href: "#", label: "Проекты" },
//   { href: "#", label: "Сертификаты" },
//   { href: "#", label: "Контакты" },
// ];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container header_container ">
      <Image src={logoSvg} alt="Company logo" />
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
