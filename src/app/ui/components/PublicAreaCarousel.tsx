"use client";
import { publicZoneData } from "@/app/constants/publicZoneData";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PublicAreaCarousel = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const handleClose = () => {
    setShowCarousel((prev) => !prev);
  };

  if (!showCarousel) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-dark rounded-lg overflow-hidden w-3/4 h-1/2 max-w-5xl">
        <div className="flex h-full">
          <div className="w-2/3 relative h-full">
            <div className="relative h-full">
              <div
                className={`absolute inset-0 transition-opacity duration-500 h-full`}
              >
                <Image
                  className="object-cover w-full h-full"
                  src={publicZoneData[index].image}
                  width={600}
                  height={800}
                  alt={`Slide ${index}`}
                />
              </div>
            </div>
            <ChevronLeftIcon
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              size={35}
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
              {publicZoneData.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-3 rounded-full ${
                    index === idx
                      ? "bg-white w-8"
                      : "bg-gray-900 opacity-30 w-4"
                  }`}
                  onClick={() => handleSelect(idx)}
                />
              ))}
            </div>
            <ChevronRightIcon
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size={35}
            />
          </div>
          <div className="w-1/3 p-4 relative">
            <XIcon className="absolute right-4 top-4" />
            <h2 className="text-2xl font-bold mb-4">
              {publicZoneData[index].name}
            </h2>
            <p>{publicZoneData[index].description}</p>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default PublicAreaCarousel;
