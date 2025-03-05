"use client";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import {
  publicApiType,
  ScrollMenu,
  VisibilityContext,
} from "react-horizontal-scrolling-menu";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const HorizontalSelector = ({
  items,
  value,
  onSelect,
}: {
  value?: number | string;
  items: {
    label: string;
    value: number | string;
  }[];
  onSelect: (value: number | string) => void;
}) => {
  const apiRef = React.useRef({} as scrollVisibilityApiType);

  useEffect(() => {
    if (value) {
      const currentElement = apiRef.current.getItemElementById(
        value.toString()
      );
      if (currentElement != undefined) {
        apiRef.current.scrollToItem(currentElement, "smooth", "center");
      }
    }
  }, [value]);

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      wrapperClassName="bg-dark px-0 flex justify-center"
      scrollContainerClassName="scrollbar-none"
      apiRef={apiRef}
    >
      {items.map((item) => (
        <MenuItem
          title={item.label}
          key={item.value}
          value={item.value}
          selectedValue={value}
          onSelect={onSelect}
        />
      ))}
    </ScrollMenu>
  );
};

const MenuItem = ({
  title,
  value,
  selectedValue,
  onSelect,
}: {
  title: string;
  value: number | string;
  selectedValue?: number | string;
  onSelect: (value: number | string) => void;
}) => {
  return (
    <div
      className={`border-gray-600 w-12 h-12 flex justify-center items-center cursor-pointer ${
        selectedValue && selectedValue == value
          ? "bg-primary text-black"
          : "text-white"
      }`}
      onClick={() => {
        onSelect(value);
      }}
    >
      {title}
    </div>
  );
};

const LeftArrow = () => {
  const { useLeftArrowVisible, scrollPrev } =
    React.useContext(VisibilityContext);
  const disabled = useLeftArrowVisible();

  return (
    <button
      disabled={disabled}
      onClick={() => scrollPrev()}
      className="cursor-pointer px-3"
    >
      <LeftOutlined color={disabled ? "grey" : "white"} />
    </button>
  );
};

const RightArrow = () => {
  const { useRightArrowVisible, scrollNext } =
    React.useContext(VisibilityContext);
  const disabled = useRightArrowVisible();

  return (
    <button
      disabled={disabled}
      onClick={() => scrollNext()}
      className="cursor-pointer px-3"
    >
      <RightOutlined color={disabled ? "grey" : "white"} />
    </button>
  );
};

function onWheel(apiObj: publicApiType, ev: React.WheelEvent): void {
  // NOTE: no good standart way to distinguish touchpad scrolling gestures
  // but can assume that gesture will affect X axis, mouse scroll only Y axis
  // of if deltaY too small probably is it touchpad
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else {
    apiObj.scrollPrev();
  }
}

export default HorizontalSelector;
