"use client";

import React, { useEffect } from "react";
import CardService from "./card/Service";
import { TypeService } from "@/types/service";
import { useServiceStore } from "@/store/serviceStore";

const Services = () => {
  const { services, fetchServices } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <div className="Container">
      <div className="flex flex-col gap-3 lg:max-w-[80%] items-center justify-center text-center">
        <p className="title">Our Services</p>
        <p className="title_section">
          Manjakan Diri Anda dengan Perawatan Profesional Kami.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 3).map((item: TypeService) => (
          <CardService key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
