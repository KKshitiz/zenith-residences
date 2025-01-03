"use client";
import { Apartment } from "@/app/types/database";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import sceneImage from "../../../../public/scene-web.webp";
import InteractiveBuildingLayout from "./InteractiveBuildingLayout";
import InteractivePublicZones from "./InteractivePublicZones";

const BuildingScene = ({ apartments }: { apartments: Apartment[] }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();

    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  console.log(apartments);

  return (
    <TransformWrapper initialScale={1} maxScale={2} smooth disablePadding>
      <TransformComponent
        contentStyle={{ width: "100%", height: "100%" }}
        wrapperStyle={{ width: "100%", height: "100%" }}
      >
        <div className="h-full w-full relative">
          <picture className="flex w-full h-full">
            <source
              srcSet="/scene-mobile.webp"
              media="(orientation: portrait)"
            />
            <source
              srcSet="/scene-web.webp"
              media="(max-height: 920px), (max-width: 1025px)"
            />
            <Image
              src={sceneImage}
              alt="Scene laptop"
              className="w-full h-full object-cover object-right"
            />
          </picture>

          <svg
            className="absolute w-full h-full top-0 left-0 z-20 "
            viewBox={isPortrait ? "0 0 360 640" : "0 0 1024 550"}
            preserveAspectRatio={
              isPortrait ? "xMidYMid slice" : "xMaxYMid slice"
            }
          >
            <InteractiveBuildingLayout isPortrait={isPortrait} />
            <InteractivePublicZones isPortrait={isPortrait} />
          </svg>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default BuildingScene;
