"use client";
const ZoomControls = () => {
  return (
    <div className="flex flex-col gap-2">
      <button className="card w-8 h-8" onClick={() => {}}>
        +
      </button>
      <button className="card w-8 h-8" disabled onClick={() => {}}>
        -
      </button>
    </div>
  );
};

export default ZoomControls;
