"use client";
import Image from "next/image";
import floorPlan from "../../../../public/floor_plan.webp";
import InteractiveFloorLayout from "./InteractiveFloorLayout";

const FloorPlanPage = () => {
  return (
    <div className="bg-[url('/main-background.jpg')] h-screen bg-cover bg-center relative">
      <Image
        src="/compass.svg"
        alt="Compass"
        width={100}
        height={100}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:bottom-24 lg:right-5 lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0"
      />
      <div>
        <InteractiveFloorLayout />
        <Image
          src={floorPlan}
          alt="Floor plan"
          className="w-full h-full object-contain object-center absolute"
        />
      </div>
      {/* <TransformWrapper initialScale={1} smooth disablePadding>
        <TransformComponent
          wrapperClass="w-full h-screen z-50 flex justify-center items-center relative"
          contentClass="flex w-full h-full"
        >
          <Image
            src={floorPlan}
            alt="Floor plan"
            className="w-full h-full absolute object-contain object-center"
          />
        </TransformComponent>
      </TransformWrapper> */}
    </div>
  );
};

export default FloorPlanPage;
