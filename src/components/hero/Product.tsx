import Image from "next/image";
import React from "react";

const HeroProduct = () => {
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
          <p className="title">home / products</p>
          <p className="title_section">Our Products</p>
        </div>
        <p className="text-[#464646] text-xl text-center lg:max-w-[65%] mx-auto">
          Menyediakan rangkaian produk perawatan berkualitas tinggi yang
          diformulasikan khusus untuk menjaga, merawat, dan menyempurnakan
          kecantikan Anda. Setiap produk kami dipilih dengan cermat untuk
          memberikan hasil terbaik dan aman digunakan.
        </p>
      </div>
    </div>
  );
};

export default HeroProduct;
