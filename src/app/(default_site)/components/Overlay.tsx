"use client";
import useStore from "@/app/utils/store";
import { useEffect } from "react";
import OverlayDesktop from "./OverlayDesktop";
import OverlayMobile from "./OverlayMobile";

const Overlay = () => {
  const { fetchApartments } = useStore();
  useEffect(() => {
    fetchApartments();
  }, [fetchApartments]);

  return (
    <>
      <OverlayDesktop />
      <OverlayMobile />
    </>
  );
};
export default Overlay;
