import React from "react";

const VisiMisi = () => {
  return (
    <div className="Container">
      <div className="grid md:grid-cols-2 justify-center gap-10">
        <div
          className="relative bg-center bg-no-repeat h-96 md:h-[443px] lg:h-[553px] bg-cover rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${"/beauty-salon.png"})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          <div className="relative w-full h-full flex flex-col gap-2 justify-end p-5 lg:p-10 text-white">
            <p className="title_section text-primary">VISI</p>
            <p className="text-lg font-normal">
              Mewujudkan Desa Sirau yang bersih, sehat, dan lestari melalui
              pengelolaan sampah berbasis masyarakat website yang kreatif,
              inovatif, dan berkelanjutan.
            </p>
          </div>
        </div>
        <div
          className="relative bg-center bg-no-repeat h-96 md:h-[443px] lg:h-[553px] bg-cover rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${"/beauty-salon-2.jpg"})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          <div className="relative w-full h-full flex flex-col gap-2 justify-end p-5 lg:p-10 text-white">
            <p className="title_section text-primary">MISI</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Meningkatkan Kesadaran Masyarakat</li>
              <li>Mengembangkan Sistem Pengelolaan Sampah</li>
              <li>Mendorong Pemanfaatan Sampah</li>
              <li>Memperkuat Kolaborasi dan Kemitraan</li>
              <li>Menciptakan Peluang Ekonomi Baru</li>
              <li>Menjaga Keberlanjutan Lingkungan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
