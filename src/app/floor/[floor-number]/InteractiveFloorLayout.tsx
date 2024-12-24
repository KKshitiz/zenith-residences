import { apartmentSvgPaths } from "@/app/constants/apartmentSvgPaths";
import { useState } from "react";

const InteractiveFloorLayout = () => {
  const [hoveredApartment, setHoveredApartment] = useState<
    number | undefined
  >();

  return (
    <div className="top-0 left-0 z-50 absolute w-full h-full">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {apartmentSvgPaths.map((apartment, index) => (
          <path
            key={index}
            d={apartment.path}
            className="cursor-pointer"
            fill="#DEC29A"
            fillOpacity={
              hoveredApartment === apartment.apartmentNumber ? 0.5 : 0
            }
            strokeWidth={4}
            stroke="#DEC29A"
            strokeOpacity={
              hoveredApartment === apartment.apartmentNumber ? 1.0 : 0
            }
            onMouseEnter={() => setHoveredApartment(apartment.apartmentNumber)}
            onMouseLeave={() => setHoveredApartment(undefined)}
          />
        ))}
      </svg>
    </div>
  );
};

export default InteractiveFloorLayout;
