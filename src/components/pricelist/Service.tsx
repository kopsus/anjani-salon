"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Jangan lupa import styles

const PriceListService = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/pricelist1.jpg",
    "/pricelist2.jpg",
    "/pricelist3.jpg",
    "/pricelist4.jpg",
    "/pricelist5.jpg",
  ];

  const openLightbox = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="Container lg:px-10 bg-slate-100">
      <p className="title_section text-primary text-center">Price List</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`Price List ${index + 1}`}
              width={500}
              height={500}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={closeLightbox}
          index={currentIndex}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </div>
  );
};

export default PriceListService;
