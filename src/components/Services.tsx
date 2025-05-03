import React from "react";
import CardService from "./card/Service";
import prisma from "@/lib/prisma";

const Services = async () => {
  const services = await prisma.service.findMany();

  return (
    <div className="Container">
      <div className="flex flex-col gap-3 lg:max-w-[80%] items-center justify-center text-center">
        <p className="title">Our Services</p>
        <p className="title_section">
          Manjakan Diri Anda dengan Perawatan Profesional Kami.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 3).map((item) => (
          <CardService key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
