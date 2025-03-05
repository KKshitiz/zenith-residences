"use client";
import useStore from "@/app/utils/store";
import { useEffect } from "react";

const ZoomControls = () => {
  const { zoomIn, zoomOut } = useStore((state) => state.zoomControls);

  useEffect(() => {
    const handleZoomKeys = (e: KeyboardEvent) => {
      if (e.key === "+") {
        zoomIn();
      }
      if (e.key === "-") {
        zoomOut();
      }
    };

    document.addEventListener("keydown", handleZoomKeys);

    return () => {
      document.removeEventListener("keydown", handleZoomKeys);
    };
  }, [zoomIn, zoomOut]);

  return (
    <div className="flex flex-col gap-3 items-center pointer-events-auto">
      <button className="card p-3" onClick={zoomIn}>
        +
      </button>
      <button className="card p-3" onClick={zoomOut}>
        -
      </button>
    </div>
  );
};

export default ZoomControls;
