import { useRouter } from "next/navigation";
import { useState } from "react";
import { floorSvgPaths } from "../../constants/floorSvgPaths";

const InteractiveBuildingLayout = () => {
  const router = useRouter();
  const [isBuildingHover, setIsBuildingHover] = useState(false);
  const [hoverFloorNumber, setHoverFloorNumber] = useState<number | undefined>(
    undefined
  );
  return (
    <g
      onMouseEnter={() => {
        setIsBuildingHover(true);
      }}
      onMouseLeave={() => {
        setIsBuildingHover(false);
        setHoverFloorNumber(undefined);
      }}
    >
      {floorSvgPaths.map((floor, index) => (
        <path
          key={index}
          id={`floor-${floor.floorNumber}`}
          fill="#DEC29A"
          fillOpacity={
            hoverFloorNumber === floor.floorNumber
              ? 1.0
              : isBuildingHover
              ? 0.5
              : 0.0
          }
          onClick={() => {
            router.push(`/floor/${floor.floorNumber}`);
          }}
          onMouseEnter={() => setHoverFloorNumber(floor.floorNumber)}
          onMouseLeave={() => setHoverFloorNumber(undefined)}
          d={floor.path}
        ></path>
      ))}
    </g>
  );
};

export default InteractiveBuildingLayout;
