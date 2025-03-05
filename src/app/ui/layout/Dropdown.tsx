import { downIcon } from "@/app/constants/assets";
import Image from "next/image";
import { useRef, useState } from "react";

type DropdownOption = {
  value: number | string;
  label: string;
};

const Dropdown = ({
  options,
  onSelect,
  value,
  placeholder,
  width,
  onMouseEnterOption,
  onMouseLeaveOption,
  className,
}: {
  placeholder: string;
  value?: number | string;
  options: DropdownOption[];
  width: number;
  onMouseEnterOption?: (value: number | string) => void;
  onMouseLeaveOption?: (value: number | string) => void;
  onSelect: (value: number | string) => void;
  className?: string | undefined;
}) => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollDown = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollBy({
        top: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="card flex justify-between items-center h-9 py-[10px] px-5 text-black bg-gradient-to-b from-primary to-[#B48962]"
        style={{
          width: `${width}px`,
        }}
      >
        <span>
          {value == undefined
            ? placeholder
            : options.find((option) => option.value == value)!.label}
        </span>
        <Image
          src={downIcon}
          alt="Down arrow"
          className={`transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-full flex flex-col">
          {/* Empty space for continuous interaction area with mouse */}
          <div className="h-3 w-full"></div>
          <div className="card h-96 w-full flex flex-col">
            <div
              ref={scrollableDivRef}
              className="flex-1 overflow-x-auto scrollbar-none"
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  className="cursor-pointer hover:bg-primary/35 py-[10px] px-[22px]"
                  onClick={() => {
                    onSelect(option.value);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => {
                    onMouseEnterOption?.(option.value);
                  }}
                  onMouseLeave={() => {
                    onMouseLeaveOption?.(option.value);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
            <div
              className="flex justify-center items-center h-5 cursor-pointer py-3 brightness-0 invert  "
              onClick={scrollDown}
            >
              <Image src={downIcon} alt="Scroll down" width={12} height={12} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
