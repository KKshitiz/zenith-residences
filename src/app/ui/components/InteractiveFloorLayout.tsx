import { apartmentSvgPaths } from "@/app/constants/apartmentSvgPaths";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InteractiveFloorLayout = () => {
  const [hoveredApartment, setHoveredApartment] = useState<
    number | undefined
  >();

  const router = useRouter();

  return (
    <svg
      viewBox="0 0 1440 900"
      className="absolute  h-full w-full z-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {apartmentSvgPaths.map((apartment, index) => (
        <path
          key={index}
          d={apartment.path}
          className={
            apartment.status === "available"
              ? "cursor-pointer"
              : "cursor-default"
          }
          fill={apartment.status === "available" ? "#DEC29A" : "#545454B2"}
          fillOpacity={
            apartment.status === "sold"
              ? 0.9
              : hoveredApartment === apartment.apartmentNumber
              ? 0.5
              : 0
          }
          strokeWidth={5}
          stroke={apartment.status === "available" ? "#FFEBC6" : "#606060"}
          strokeOpacity={
            apartment.status === "sold"
              ? 1
              : hoveredApartment === apartment.apartmentNumber
              ? 1.0
              : 0
          }
          onClick={() => {
            if (apartment.status === "available") {
              router.push(`/floor/${9}/${apartment.apartmentNumber}`);
            }
          }}
          onMouseEnter={() => setHoveredApartment(apartment.apartmentNumber)}
          onMouseLeave={() => setHoveredApartment(undefined)}
        />
      ))}
    </svg>
  );
};

export default InteractiveFloorLayout;
