import { closeIcon } from "@/app/constants/assets";
import { convertViewsToHumanReadable } from "@/app/utils/extra";
import { useFormStore } from "@/app/utils/formStore";
import useStore from "@/app/utils/store";
import Image from "next/image";

const ApartmentInfo = () => {
  const apartments = useStore((state) => state.apartments);
  const currentHoverApartment = useStore(
    (state) => state.currentHoverApartment
  );
  const setFormOpened = useFormStore((state) => state.setFormOpened);

  const hoveredApartmentDetails = apartments.find(
    (apartment) => apartment.unitNumber === currentHoverApartment
  );

  if (hoveredApartmentDetails == undefined) return null;

  return (
    <div className="card flex flex-col p-5 gap-1 pointer-events-auto">
      <div className="flex justify-between">
        <p className="text-primary mb-1 text-lg">Apartment Info.</p>
        <button
          onClick={() => {
            console.log("Close called");
          }}
        >
          <Image src={closeIcon} alt="Close" height={14} />
        </button>
      </div>
      <p className="font-sans text-primary">
        View:
        <span className="text-white ml-1">
          {convertViewsToHumanReadable(hoveredApartmentDetails.views)}
        </span>
      </p>
      <div className="flex items-end gap-8">
        <p className="font-sans text-primary">
          No. of rooms:
          <span className="text-white ml-1">
            {hoveredApartmentDetails.numberOfRooms} Bedrooms
          </span>
        </p>
        <p className="font-sans text-primary">
          Price (AED):
          <span className="text-white ml-1">
            {hoveredApartmentDetails.price.toLocaleString()}
          </span>
        </p>
      </div>
      <div className="flex items-end gap-8">
        <p className="font-sans text-primary">
          Area (Sq. feet):
          <span className="text-white ml-1">
            {hoveredApartmentDetails.area.toLocaleString()}
          </span>
        </p>
        <p className="font-sans text-primary">
          Balcony area (Sq. feet):
          <span className="text-white ml-1">{(300).toLocaleString()}</span>
        </p>
      </div>
      <button
        className="mt-4 p-2 bg-primary text-black font-sans"
        onClick={() => setFormOpened(true)}
      >
        Register interest
      </button>
    </div>
  );
};

export default ApartmentInfo;
