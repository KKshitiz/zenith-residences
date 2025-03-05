"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import AvailabilityLegend from "../floor/components/AvailabilityLegend";
import HorizontalApartmentSelector from "../floor/components/HorizontalApartmentSelector";
import Filters from "./FiltersDialog";
import HorizontalFloorSelector from "./HorizontalFloorSelector";
import NavBar from "./NavBar";

const OverlayMobile = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(overlayRef.current, { opacity: 1, duration: 1 });
    },
    { scope: overlayRef }
  );

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isApartmentPage = pathname.includes("/apartment");
  const isFloorPage = !isHomePage && !isApartmentPage;

  return (
    <div
      ref={overlayRef}
      className="landscape:hidden opacity-0 flex flex-col absolute top-0 left-0 justify-between w-full h-full p-3 z-overlay pointer-events-none"
    >
      <NavBar />
      <div className="flex flex-col justify-between w-full h-full">
        <Filters />

        {isHomePage && <HorizontalFloorSelector />}

        {isFloorPage && (
          <div className="flex flex-col items-center gap-y-3 landscape:hidden">
            <AvailabilityLegend />
            <HorizontalApartmentSelector />
          </div>
        )}
      </div>
    </div>
  );
};

export default OverlayMobile;
