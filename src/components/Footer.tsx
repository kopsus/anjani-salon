"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import Maps from "./maps/Map";

const Footer = () => {
  return (
    <div className="flex flex-col gap-16 px-4 lg:px-8 max-w-[1400px] mx-auto">
      <div
        data-aos="zoom-in"
        className="w-full max-w-[1840px] lg:h-[380px] py-[48px] lg:py-0 mx-auto rounded-[30px] bg-black"
      >
        <div className="flex flex-col gap-8 w-full h-full justify-center items-center max-w-[70%] mx-auto text-center">
          <div className="flex flex-col gap-3">
            <p className="text-[29px] lg:text-5xl text-[#eaeaea]">
              Siap Tampil Lebih Percaya Diri?
            </p>
            <p className="text-lg lg:text-[23px] text-white">
              Tinggalkan data Anda, dan tim kami akan membantu Anda mendapatkan
              perawatan terbaik.
            </p>
          </div>
          <Button href="/contact">Hubungi Kami</Button>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] pt-16 lg:px-14">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:min-w-[60%] flex flex-col gap-12 lg:flex-row lg:gap-0 lg:justify-between">
            <div className="flex flex-col gap-4 lg:min-w-[257px] lg:max-w-[40%]">
              <div className="flex flex-col gap-2">
                <div className="w-14 lg:w-16">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <p className="w-full lg:w-[257px] text-sm text-[#464646]">
                  Nikmati layanan perawatan terbaik yang kami rancang untuk
                  memancarkan kecantikan alami Anda setiap hari.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href={"https://www.instagram.com/anjani_beautycenter/"}
                  target="_blank"
                >
                  <FaInstagram className="size-8" />
                </Link>
                <Link href={"https://wa.me/+6287724002299"} target="_blank">
                  <IoLogoWhatsapp className="size-8" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 w-[297px]">
              <div className="flex flex-col gap-4 lg:text-lg text-[#464646]">
                <p className="font-bold">Menu</p>
                <div className="flex flex-col gap-3">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/service"}>Services</Link>
                  <Link href={"/product"}>Products</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:text-lg text-[#464646]">
                <p className="font-bold">Info</p>
                <div className="flex flex-col gap-3">
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>
          </div>
          <Maps />
        </div>
        <p className="py-6 text-end text-sm text-[#464646]">
          © 2025. Anjani Beauty Center
        </p>
      </div>
    </div>
  );
};

export default Footer;
