import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const pages = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Sobre", href: "/sobre" },
    { id: 3, name: "Contato", href: "/contato" },
  ];
  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {pages.map((page) => (
            <Link href={page.href} key={page.id}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {page.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button className="bg-primary font-bold">Entrar</Button>
    </div>
  );
};

export default Header;
