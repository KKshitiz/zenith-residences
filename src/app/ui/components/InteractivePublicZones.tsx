import {
  publicZonePathDesktop,
  publicZonePathMobile,
} from "@/app/constants/publicZonePath";
import { useState } from "react";

const InteractivePublicZones = ({ isPortrait }: { isPortrait: boolean }) => {
  const [isPublicZoneHover, setIsPublicZoneHover] = useState(false);

  const publicZonePath = isPortrait
    ? publicZonePathMobile
    : publicZonePathDesktop;

  return (
    <g
      id="public-zones"
      className="cursor-pointer"
      onClick={() => {
        console.log("Launch carousel");
      }}
      onMouseEnter={() => setIsPublicZoneHover(true)}
      onMouseLeave={() => setIsPublicZoneHover(false)}
    >
      <g id="public-zones-floor">
        <path
          fill="#DEC29A"
          fillOpacity={isPublicZoneHover ? 0.5 : 0}
          d={publicZonePath}
        ></path>
      </g>
      <g id="public-zones-tag">
        <line
          stroke="#DEC29A"
          x1={1094.26}
          y1={718.616}
          x2={1122.97}
          y2={687.324}
          strokeWidth={2}
        />
        <rect
          id="tag-fill"
          fill={isPublicZoneHover ? "#DEC29A" : "#1D2A28"}
          stroke="#DEC29A"
          strokeWidth={2}
          x={1091}
          y={649}
          width="146"
          height="40"
          rx="8"
        />
        <text
          x={1115}
          y={675}
          fontSize={18}
          fontFamily=""
          fill={isPublicZoneHover ? "black" : "#DEC29A"}
        >
          Public zones
        </text>
      </g>
    </g>
  );
};

export default InteractivePublicZones;
