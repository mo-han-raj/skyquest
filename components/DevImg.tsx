'use client'
import React from "react";
import { Carousel } from "@material-tailwind/react";

interface DevImgProps {
  images: string[];          // Array of image URLs
  containerStyles?: string;  // Additional styles for the container
}

const DevImg: React.FC<DevImgProps> = ({ images, containerStyles }) => {
  return (
    <div className={containerStyles}>
      <Carousel transition={{ type: "tween", duration: 1 }} autoplay autoplayDelay={7000} className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default DevImg;
