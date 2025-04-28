import Image from "next/image";
import React from "react";

const HeroAbout = () => {
  return (
    <div className="w-full relative pt-[120px] px-4 lg:px-0 lg:pt-0 lg:h-[50vh] flex flex-col justify-end">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="https://framerusercontent.com/images/6nect3y8wTTkPP5aufmjYz7ki4.png?scale-down-to=2048"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-2 justify-center text-center">
          <p className="title">home / tentang</p>
          <p className="title_section">Tentang Anjani Beauty center</p>
        </div>
        <p className="text-[#464646] text-xl text-center lg:max-w-[60%] mx-auto">
          Kami mengembangkan keterampilan tim kami dengan teknik dan teknologi
          kecantikan terbaru, memastikan setiap layanan yang diberikan mampu
          mempercantik, merawat, dan memperkuat pesona alami Anda.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
