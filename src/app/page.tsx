"use client";
import { useState } from "react";
import { publicZonePath } from "./constants/publicZonePath";
import InteractiveBuildingLayout from "./ui/components/InteractiveBuildingLayout";

export default function Home() {
  const [isPublicZoneHover, setIsPublicZoneHover] = useState(false);

  return (
    <div className="bg-[url('/scene-web.webp')] min-h-screen bg-cover bg-center relative">
      {/* <picture className="w-full h-full">
        <source srcSet="/scene-mobile.webp" media="(orientation: portrait)" />
        <source
          srcSet="/scene-web.webp"
          media="(max-height: 920px), (max-width: 1025px)"
        />
      </picture> */}

      <svg
        className="absolute w-full h-full top-0 left-0  z-50"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMid slice"
      >
        <g id="floors">
          <InteractiveBuildingLayout />
        </g>
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
      </svg>
    </div>
  );
}
