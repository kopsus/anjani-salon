import React from "react";
import FormContact from "./form/Contact";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="Container">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8 text-[#464646]">
          <div className="flex flex-col gap-[10px]">
            <p className="title_section">Write us a message</p>
            <p className="lg:text-lg">
              Send us a message anytime. Our team is ready to assist you
              promptly.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <MdEmail className="size-6" />:<p>example@gmail.com</p>
            </div>
            <div className="flex items-start gap-4">
              <IoLogoWhatsapp className="size-6" />:<p>+62 862 xxxxxx</p>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="min-w-6 w-6 h-6" />:
              <p>
                Jl. Gatot Subroto Kav. 32-34, Kelurahan Kuningan Timur.
                Kecamatan Setia Budi, Jakarta Selatan 12950
              </p>
            </div>
          </div>
        </div>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
