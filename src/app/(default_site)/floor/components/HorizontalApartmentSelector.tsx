"use client";
import HorizontalSelector from "@/app/ui/layout/HorizontalSelector";
import useStore from "@/app/utils/store";
import { useRouter } from "next/navigation";

const HorizontalApartmentSelector = () => {
  const router = useRouter();

  const {
    availableFloorApartments,
    currentFloor,
    setCurrentApartment,
    currentSelectedApartment,
    setCurrentSelectedApartment,
  } = useStore();

  const items = availableFloorApartments.map((apartment) => ({
    value: apartment.unitNumber,
    label: apartment.unitNumber.toString(),
  }));

  return (
    <div className="flex flex-col gap-2 w-full  pointer-events-auto">
      <HorizontalSelector
        items={items}
        value={currentSelectedApartment}
        onSelect={(value) => {
          setCurrentSelectedApartment(Number(value));
        }}
      />
      <button
        className={`${
          currentSelectedApartment == undefined ? "bg-white" : "bg-primary"
        } text-black uppercase py-3`}
        disabled={currentSelectedApartment == undefined}
        onClick={() => {
          setCurrentApartment(Number(currentSelectedApartment));
          router.push(
            `/floor/${currentFloor}/apartment/${currentSelectedApartment}`
          );
        }}
      >
        {currentSelectedApartment == undefined
          ? "Choose an apartment"
          : `View apartment ${currentSelectedApartment}`}
      </button>
    </div>
  );
};

export default HorizontalApartmentSelector;
