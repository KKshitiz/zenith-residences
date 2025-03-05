"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import AvailabilityLegend from "../floor/components/AvailabilityLegend";
import BuilderInfoDialog from "../map/components/BuilderInfoDialog";
import NavBar from "./NavBar";
import ProjectStatistics from "./ProjectStatistics";
import ZoomControls from "./ZoomControls";

const OverlayDesktop = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(overlayRef.current, { opacity: 1, duration: 1 });
    },
    { scope: overlayRef }
  );

  const path = usePathname();
  const isMapPage = path === "/map";
  const isHomePage = path === "/";
  const isApartmentPage = path.includes("/apartment");
  const isFloorPage = !isMapPage && !isHomePage && !isApartmentPage;

  return (
    <div
      ref={overlayRef}
      className="portrait:hidden opacity-0 flex flex-col absolute top-0 left-0 justify-between w-full h-full p-3 z-overlay pointer-events-none"
    >
      <NavBar />
      <div className="flex flex-col justify-between items-start w-full h-full">
        {/* <Filters /> */}
        {isMapPage && <BuilderInfoDialog />}

        {/* Bottom stats in large screen */}
        {!isMapPage && (
          <div className="portrait:hidden flex justify-between items-end w-full">
            <ProjectStatistics />
            <div className="flex gap-2">
              {isFloorPage && <AvailabilityLegend />}
              <ZoomControls />
            </div>
          </div>
        )}
      </div>
      {/* <BrochureForm /> */}
    </div>
  );
};

export default OverlayDesktop;
