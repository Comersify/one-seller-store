"use client";
import { useState } from "react";
import Image from "next/image";

export const Gallery = ({ images }) => {
  if (!images) return;
  images = images.map((image) => image.image);
  const [bigImage, setBigImage] = useState(images[0]);
  const [smallImages, setSmallImages] = useState(
    images.slice(1, images.length)
  );
  const showImage = (image) => {
    setSmallImages(images.filter((im) => im != image));
    setBigImage(image);
  };
  return (
    <section className="h-90 pt-16 sm:col-span-1 md:col-span-2 lg:col-span-2 relative lg:gap-x-8 lg:px-8">
      <div className="flex justify-center">
        <div className="block space-y-4 mr-2">
          {smallImages.map((image, i) => {
            return (
              <Image
                key={i}
                width={120}
                height={120}
                src={image?.replace("/media/", "")}
                className="w-[60px] h-[60px] rounded-md cursor-pointer md:mb-2"
                onClick={() => showImage(image)}
              />
            );
          })}
        </div>
        <Image
          width={220}
          height={220}
          src={bigImage?.replace("/media/", "")}
          className="w-[300px] rounded-md h-[400px]"
        />
      </div>
    </section>
  );
};

export function CardSlider() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full">
        {/* Radio Inputs for Navigation (Hidden) */}


        {/* Cards Container (Same parent as radio inputs) */}
        <div className="w-full flex-shrink-0 absolute inset-0 flex items-center justify-center p-6 bg-white rounded-lg shadow-md transition-opacity duration-500 opacity-100 peer-checked/slide1:opacity-100 peer-checked/slide2:opacity-0 peer-checked/slide3:opacity-0">
          <h2 className="text-xl font-semibold text-gray-800">Card 1</h2>
        </div>
        <div className="w-full flex-shrink-0 absolute inset-0 flex items-center justify-center p-6 bg-white rounded-lg shadow-md transition-opacity duration-500 opacity-0 peer-checked/slide2:opacity-100 peer-checked/slide1:opacity-0 peer-checked/slide3:opacity-0">
          <h2 className="text-xl font-semibold text-gray-800">Card 2</h2>
        </div>
        <div className="w-full flex-shrink-0 absolute inset-0 flex items-center justify-center p-6 bg-white rounded-lg shadow-md transition-opacity duration-500 opacity-0 peer-checked/slide3:opacity-100 peer-checked/slide1:opacity-0 peer-checked/slide2:opacity-0">
          <h2 className="text-xl font-semibold text-gray-800">Card 3</h2>
        </div>


        {/* Pagination Dots */}
      </div>
    </div>
  );
}
