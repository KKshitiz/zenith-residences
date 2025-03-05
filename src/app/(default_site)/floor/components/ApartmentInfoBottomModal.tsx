import { convertViewsToHumanReadable } from "@/app/utils/extra";
import useStore from "@/app/utils/store";
import BottomModal from "../../../ui/layout/BottomModal";

const ApartmentInfoBottomModal = () => {
  const {
    apartments,
    currentApartment,
    apartmentInfoBottomModalOpen,
    setApartmentInfoBottomModalOpen,
  } = useStore();

  const currentApartmentDetails = apartments.find(
    (apartment) => apartment.unitNumber == currentApartment
  );

  if (currentApartmentDetails == undefined) return null;

  return (
    <BottomModal
      isOpen={apartmentInfoBottomModalOpen}
      onClose={() => {
        setApartmentInfoBottomModalOpen(false);
      }}
    >
      <p className="font-sans text-primary">
        View:
        <span className="text-white ml-1">
          {convertViewsToHumanReadable(currentApartmentDetails.views)}
        </span>
      </p>
      <div className="flex items-end gap-8">
        <p className="font-sans text-primary">
          No. of rooms:
          <span className="text-white ml-1">
            {currentApartmentDetails.numberOfRooms} Bedrooms
          </span>
        </p>
        <p className="font-sans text-primary">
          Price (AED):
          <span className="text-white ml-1">
            {currentApartmentDetails.price.toLocaleString()}
          </span>
        </p>
      </div>
      <div className="flex items-end gap-8">
        <p className="font-sans text-primary">
          Area (Sq. feet):
          <span className="text-white ml-1">
            {currentApartmentDetails.area.toLocaleString()}
          </span>
        </p>
        <p className="font-sans text-primary">
          Balcony area (Sq. feet):
          <span className="text-white ml-1">{(300).toLocaleString()}</span>
        </p>
      </div>
    </BottomModal>
  );
};

export default ApartmentInfoBottomModal;
