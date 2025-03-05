import { closeIcon } from "@/app/constants/assets";
import Image from "next/image";

const BottomModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      } flex-col justify-end bottom-0 left-0 right-0 bg-black bg-opacity-90 z-50 h-full`}
    >
      <div className="card mx-5 p-10 flex flex-col">
        <button onClick={onClose}>
          <Image
            className="absolute right-5 top-5"
            src={closeIcon}
            alt="Close modal"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default BottomModal;
