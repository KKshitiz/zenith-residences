"use client";
import useStore from "@/app/utils/store";
import { Slider } from "antd";
import BottomModal from "../../ui/layout/BottomModal";

const FilterBottomModal = () => {
  const {
    parameters,
    toggleFilterDialog,
    clearFilters,
    handleViewsChange,
    selectedViews,
    selectedNoOfBedrooms,
    handleNoOfBedroomsChange,
    priceRange,
    setPriceRange,
    areaRange,
    isFilterDialogOpened,
    setAreaRange,
  } = useStore((state) => state.filter);

  return (
    <BottomModal isOpen={isFilterDialogOpened} onClose={toggleFilterDialog}>
      <div>
        <h3 className="text-primary text-xl mb-3">View</h3>
        <div className="flex flex-wrap gap-2">
          {parameters.views.map((view) => (
            <span
              key={view.value}
              className="text-xs flex items-center gap-1 mb-2"
            >
              <input
                type="checkbox"
                name=""
                id={view.value}
                checked={selectedViews.includes(view.value)}
                onChange={() => handleViewsChange(view.value)}
              />
              <label htmlFor={view.value} className="font-sans">
                {view.label}
              </label>
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-primary text-xl mb-3">No. of rooms</h3>
        <div className="flex flex-wrap gap-2">
          {parameters.propertyTypes.map((propertyType) => (
            <span
              key={propertyType.value}
              className="text-xs flex items-center gap-1 mb-2"
            >
              <input
                type="checkbox"
                name=""
                id={propertyType.value.toString()}
                checked={selectedNoOfBedrooms.includes(propertyType.value)}
                onChange={() => handleNoOfBedroomsChange(propertyType.value)}
              />
              <label
                htmlFor={propertyType.value.toString()}
                className="font-sans"
              >
                {propertyType.propertyTypeDisplay}
              </label>
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-baseline">
          <h3 className="text-primary text-xl mb-0">Price (AED)</h3>
          <p className="font-sans text-sm">
            {parameters.priceMin.toLocaleString()} -{" "}
            {parameters.priceMax.toLocaleString()}
          </p>
        </div>
        <Slider
          className="my-3 w-full"
          range
          value={priceRange}
          defaultValue={[parameters.priceMin, parameters.priceMax]}
          min={parameters.priceMin}
          max={parameters.priceMax}
          marks={{
            [parameters.priceMin]: parameters.priceMin,
            [parameters.priceMax]: parameters.priceMax,
          }}
          onChange={(value) => {
            if (Array.isArray(value)) {
              setPriceRange(value as [number, number]);
            }
          }}
        />
      </div>

      <div>
        <div className="flex justify-between items-baseline">
          <h3 className="text-primary text-xl mb-3">Area (Sq. feet)</h3>
          <p className="font-sans text-sm">
            {parameters.areaMin.toLocaleString()} -{" "}
            {parameters.areaMax.toLocaleString()}
          </p>
        </div>
        <Slider
          className="my-3 w-full"
          range
          value={areaRange}
          defaultValue={[parameters.areaMin, parameters.areaMax]}
          min={parameters.areaMin}
          max={parameters.areaMax}
          marks={{
            [parameters.areaMin]: { label: parameters.areaMin },
            [parameters.areaMax]: { label: parameters.areaMax },
          }}
          onChange={(value) => {
            if (Array.isArray(value)) {
              setAreaRange(value as [number, number]);
            }
          }}
        />
      </div>

      <button
        className="card font-sans bg-primary text-black py-2"
        onClick={clearFilters}
      >
        Clear all filters
      </button>
    </BottomModal>
  );
};

export default FilterBottomModal;
