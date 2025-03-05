"use client";
import { zoomDragImage } from "@/app/constants/assets";
import { useHydration, useModalStore } from "@/app/utils/modalStore";
import Image from "next/image";

const ZoomControlInstructionsDialog = () => {
  const { zoomInstructionsRead, setZoomInstructionsRead } = useModalStore();

  const hasHydrated = useHydration();

  if (zoomInstructionsRead == undefined || zoomInstructionsRead || !hasHydrated)
    return null;

  return (
    <div className="landscape:hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-modal p-8 bg-secondary flex flex-col justify-center items-center">
      <Image src={zoomDragImage} alt="Zoom and drag" />
      <p className="text-nowrap font-sans mb-6">Zoom and drag screen</p>
      <button
        className="card bg-primary text-black font-sans py-2 w-full"
        onClick={() => {
          setZoomInstructionsRead(true);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default ZoomControlInstructionsDialog;
