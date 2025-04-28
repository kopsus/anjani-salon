import Image from "next/image";
import React from "react";

const HeroService = () => {
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
          <p className="title">home / services</p>
          <p className="title_section">Our Service</p>
        </div>
        <p className="text-[#464646] text-xl text-center lg:max-w-[65%] mx-auto">
          Memberikan pelayanan terbaik dengan sentuhan profesional, untuk
          membantu Anda tampil lebih percaya diri dan memancarkan kecantikan
          alami dari dalam. Kami menggunakan metode, teknik, dan produk pilihan
          untuk hasil perawatan yang maksimal dan memuaskan.
        </p>
      </div>
    </div>
  );
};

export default HeroService;
