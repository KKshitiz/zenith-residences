"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import floorPlan from "../../../../public/floor_plan.webp";
import InteractiveFloorLayout from "../../ui/components/InteractiveFloorLayout";

const FloorPlanPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchContentRef>(null);

  const handleZoomIn = () => {
    transformComponentRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    transformComponentRef.current?.zoomOut();
  };

  return (
    <div className="bg-[url('/main-background.jpg')] h-screen bg-cover bg-center relative">
      <Image
        src="/compass.svg"
        alt="Compass"
        width={100}
        height={100}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:bottom-24 lg:right-5 lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0"
      />
      <div className="fixed bottom-5 right-5 flex flex-col z-20">
        <button className="" onClick={handleZoomIn}>
          +
        </button>
        <button className="" onClick={handleZoomOut}>
          -
        </button>
      </div>

      <TransformWrapper
        initialScale={1}
        maxScale={2}
        smooth
        disablePadding
        ref={transformComponentRef}
        doubleClick={{ disabled: true }}
      >
        <TransformComponent
          contentStyle={{ width: "100%", height: "100%" }}
          wrapperStyle={{ width: "100%", height: "100%" }}
        >
          <InteractiveFloorLayout />
          <Image
            src={floorPlan}
            alt="Floor plan"
            className="w-full h-full object-contain object-center absolute"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default FloorPlanPage;
