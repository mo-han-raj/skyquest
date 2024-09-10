import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ImageGallery = () => {
  const images = [
    '/work/p1.jpg',
    '/work/p2.jpg',
    '/work/p3.jpg',
  ];

  return (
    <div className="w-full mb-8">
      {/* Large Screen Image Tiles */}
      <div className="hidden lg:grid grid-cols-2 gap-4">
    
        <div className="relative w-full h-full">
            <Image
            src={images[0]}
            alt="Northern Lights 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            />
        </div>

        {/* Two Smaller Images on the Right */}
        <div className="grid grid-rows-2 gap-4">
            {images.slice(1, 3).map((src, index) => (
            <div key={index} className="relative w-full h-64">
                <Image
                src={src}
                alt={`Northern Lights ${index + 2}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                />
            </div>
            ))}
        </div>
        </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <Swiper spaceBetween={10} slidesPerView={1}>
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Northern Lights ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
