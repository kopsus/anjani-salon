import React from "react";
import Image from "next/image";
import Button from "./Button";

interface AboutProps {
  isClamp?: boolean;
}

const About = ({ isClamp = true }: AboutProps) => {
  return (
    <article className="w-full max-w-[1400px] mx-auto py-10 px-4 lg:py-20 lg:px-[120px]">
      <Image
        src="/beauty-salon-2.jpg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto mb-5 lg:max-w-[45%] rounded-3xl lg:float-right lg:ml-5"
      />
      <div className="w-full lg:gap-6 text-[#464646]">
        <p className="text-[26px] lg:text-4xl leading-normal font-semibold">
          Sejarah Anjani beauty center
        </p>
        <p className={`text-base md:text-lg ${isClamp ? "line-clamp-6" : ""}`}>
          Anjani Beauty Center resmi dibuka pada 15 Mei 2024 di desa pegiringan
          setelah melalui perjalanan panjang selama 2 tahun yang difokuskan pada
          pendidikan kecantikan,pelatihan,dan seminar. Owner Anjani Beauty
          Center menerima 2 gelar yang sangat dihormati yaitu : Sarjana Ekonomi
          Pembangunan dan Diploma Luxury Facial dan dan Aesthetic dari IBSTAAA
          Singapura. Bisnis ini berstandar ASEAN dan diakui secara Nasional
          dengan sertifikat BNSP. Pemilik juga memiliki Sertifikat Ahli
          kecantikan senior dan ahli kecantikan dengan tekhnologi, yang
          menunjukkan komitmen nya pada kualitas dan inovasi. Motivasi utama
          dibalik pendirian salon ini adalah keinginan untuk menggabungkan ilmu
          ekonomi dan kecantikan medis. Anjani Beauty Center berencana untuk
          berkembang menjadi klinik kecantikan yang menawarkan perawatan medis .
          Ia bekerja sama dengan suaminya yang seorang dokter spesialis kulit
          dan ada juga perawat yang ada di klinik untuk melaksanakan rencana
          ini. Anjani Beauty Center terus berkembang menjadi salah satu pusat
          kecantikan terkemuka dengan dedikasi terhadap kualitas dan inovasi.
          Pusat ini tidak hanya memenuhi kebutuhan pelanggan tetapi juga menjadi
          inspirasi bagi bisnis kecantikan lainnya.
        </p>
        {isClamp && (
          <Button href="/about" className="w-max mt-5">
            Lihat selengkapnya
          </Button>
        )}
      </div>
    </article>
  );
};

export default About;
