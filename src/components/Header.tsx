"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Fade as Hamburger } from "hamburger-react";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;
  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const menuItems = [
    {
      label: "Beranda",
      link: "/",
    },
    {
      label: "Tentang",
      link: "/about",
    },
    {
      label: "Produk",
      link: "/product",
    },
    {
      label: "Layanan",
      link: "/service",
    },
  ];

  return (
    <header className="relative z-50">
      <div className="fixed top-0 left-0 w-full">
        <div
          className={`${
            isOpen && "bg-slate-100 lg:bg-transparent"
          } flex items-center justify-between p-4 lg:py-3 lg:px-8 max-w-[1400px] mx-auto`}
        >
          <div className="w-16 h-16 overflow-hidden rounded-full p-3 bg-black">
            <Image src="/logo.jpg" alt="" width={0} height={0} sizes="100vw" />
          </div>
          <div
            className={`${
              isOpen ? "translate-y-0" : "-translate-y-[130%] lg:translate-y-0"
            } transition-all duration-300 absolute left-0 top-full flex flex-col w-full py-4 gap-4 bg-slate-100 lg:w-auto lg:py-0 lg:relative lg:flex-row items-center lg:gap-[2px] lg:rounded-full border border-[#eaeaea] lg:h-[50px] px-[5px] lg:bg-white/30 lg:backdrop-blur-md`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={handleChange}
                className={`${
                  isActiveLink(item.link) && "bg-primary text-white"
                } px-4 py-2 text-[#464646] rounded-full hover:bg-slate-100 hover:text-black`}
              >
                {item.label}
              </Link>
            ))}

            <div className="lg:hidden">
              <Button
                href="/contact"
                bgColor="bg-black"
                hoverBgColor="hover:bg-primary"
                textColor="text-white"
                borderColor="border border-transparent"
              >
                Kontak
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Button
              href="/contact"
              bgColor="bg-black"
              hoverBgColor="hover:bg-primary"
              textColor="text-white"
              borderColor="border border-transparent"
            >
              Kontak
            </Button>
          </div>
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
