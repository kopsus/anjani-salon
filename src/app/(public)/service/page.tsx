import CardService from "@/components/card/Service";
import HeroService from "@/components/hero/Service";
import PriceListService from "@/components/pricelist/Service";
import Testimoni from "@/components/Testimoni";
import Video from "@/components/Video";
import { dataService } from "@/data/services";
import React from "react";

const page = () => {
  return (
    <>
      <HeroService />
      <div className="Container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataService.map((item) => (
          <CardService key={item.id} item={item} />
        ))}
      </div>
      <Video />
      <PriceListService />
      <Testimoni />
    </>
  );
};

export default page;
