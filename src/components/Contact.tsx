import React from "react";
import FormContact from "./form/Contact";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="Container">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8 text-[#464646]">
          <div className="flex flex-col gap-[10px]">
            <p className="title_section">Tuliskan pesan kepada kami</p>
            <p className="lg:text-lg">
              Kirimkan pesan kepada kami kapan saja. Tim kami siap membantu Anda
              segera.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href={"https://www.instagram.com/anjani_beautycenter/"}
              target="_blank"
              className="flex items-start gap-4"
            >
              <FaInstagram className="size-6" />:<p>anjani_beautycenter</p>
            </Link>
            <Link
              href={"https://wa.me/+6287724002299"}
              target="_blank"
              className="flex items-start gap-4"
            >
              <IoLogoWhatsapp className="size-6" />:<p>+6287724002299</p>
            </Link>
            <Link
              href={
                "https://www.google.com/maps/place/Dr.Aviv+Aziz+T.+Mmr/@-7.0657704,109.3798344,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6fe62bc0cb04a1:0x2c9b83330ca7da9f!8m2!3d-7.0657704!4d109.3824093!16s%2Fg%2F11y3knw3mb?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              className="flex items-start gap-4"
            >
              <FaMapMarkerAlt className="min-w-6 w-6 h-6" />:
              <p>
                Praktek Dokter Aviv Aziz Ds.Pegiringan (depan pasar pegiringan)
                kec.Bantarbolang Kab Pemalang
              </p>
            </Link>
          </div>
        </div>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
