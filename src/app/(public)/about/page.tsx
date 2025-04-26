import About from "@/components/About";
import HeroAbout from "@/components/hero/About";
import Testimoni from "@/components/Testimoni";
import VisiMisi from "@/components/VisiMisi";
import React from "react";

const page = () => {
  return (
    <>
      <HeroAbout />
      <About isClamp={false} />
      <VisiMisi />
      <Testimoni />
    </>
  );
};

export default page;
