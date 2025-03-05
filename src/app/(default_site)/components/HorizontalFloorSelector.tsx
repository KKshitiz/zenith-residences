"use client";
import HorizontalSelector from "@/app/ui/layout/HorizontalSelector";
import useStore from "@/app/utils/store";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const HorizontalFloorSelector = () => {
  const router = useRouter();

  const {
    availableFloors,
    setCurrentFloor,
    currentSelectedFloor,
    setCurrentSelectedFloor,
    setCurrentApartment,
    setCurrentSelectedApartment,
  } = useStore();

  const items = availableFloors.map((availableFloor) => ({
    value: availableFloor,
    label: availableFloor.toString(),
  }));

  return (
    <div className="flex flex-col gap-2 w-full landscape:hidden pointer-events-auto">
      <HorizontalSelector
        items={items}
        value={currentSelectedFloor}
        onSelect={(value) => {
          setCurrentSelectedFloor(Number(value));
        }}
      />
      <Button
        size="large"
        className={`uppercase`}
        disabled={currentSelectedFloor == undefined}
        onClick={() => {
          setCurrentFloor(Number(currentSelectedFloor));
          setCurrentSelectedApartment(undefined);
          setCurrentApartment(undefined);
          router.push(`/floor/${currentSelectedFloor}`);
        }}
      >
        {currentSelectedFloor == undefined
          ? "Choose the floor"
          : `View floor ${currentSelectedFloor}`}
      </Button>
    </div>
  );
};

export default HorizontalFloorSelector;
