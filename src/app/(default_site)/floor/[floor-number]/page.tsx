"use client";
import { compassImage, floorPlanImage } from "@/app/constants/assets";
import InteractiveFloorLayout from "@/app/(default_site)/floor/components/InteractiveFloorLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

const FloorPlanPage = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const transformComponentRef = useRef<ReactZoomPanPinchContentRef>(null);

  useGSAP(
    () => {
      gsap.to(bgRef.current, { opacity: 1, duration: 3 });
    },
    { scope: bgRef }
  );

  return (
    <div
      ref={bgRef}
      className="bg-[url('/images/main-background.jpg')] h-screen bg-cover bg-center relative opacity-0"
    >
      <Image
        src={compassImage}
        alt="Compass"
        width={100}
        height={100}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:bottom-24 lg:right-5 lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0"
      />

      <TransformWrapper
        initialScale={1}
        maxScale={2}
        smooth
        disablePadding
        ref={transformComponentRef}
        doubleClick={{ disabled: true }}
        onZoom={(ref, event) => {
          console.log(event);
        }}
      >
        <TransformComponent
          contentStyle={{ width: "100%", height: "100%" }}
          wrapperStyle={{ width: "100%", height: "100%" }}
        >
          <InteractiveFloorLayout />
          <Image
            src={floorPlanImage}
            alt="Floor plan"
            className="w-full h-full object-contain object-center absolute"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default FloorPlanPage;
