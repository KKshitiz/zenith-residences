"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  publicApiType,
  ScrollMenu,
  VisibilityContext,
} from "react-horizontal-scrolling-menu";

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

const HorizontalFlatSelector = () => {
  const items = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      wrapperClassName="bg-dark px-2"
      scrollContainerClassName="flex justify-center scrollbar-none"
    >
      {items.map((item, index) => (
        <MenuItem title={item} key={index} />
      ))}
    </ScrollMenu>
  );
};

const MenuItem = ({ title }: { title: string }) => {
  return (
    <div className="border-gray-600  w-12 h-12 flex justify-center items-center cursor-pointer">
      {title}
    </div>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      style={{
        cursor: "pointer",
        border: "none",
        background: "transparent",
        fontSize: "1.5rem",
      }}
    >
      <ChevronLeftIcon />
    </button>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      style={{
        cursor: "pointer",
        border: "none",
        background: "transparent",
        fontSize: "1.5rem",
      }}
    >
      <ChevronRightIcon />
    </button>
  );
};

export default HorizontalFlatSelector;
