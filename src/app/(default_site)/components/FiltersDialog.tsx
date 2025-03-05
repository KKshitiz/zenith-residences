"use client";
import useStore from "@/app/utils/store";
import { CloseOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Card, Slider } from "antd";

const Filters = () => {
  const {
    parameters,
    toggleFilterDialog,
    clearFilters,
    handleViewsChange,
    isFilterDialogOpened,
    selectedViews,
    selectedNoOfBedrooms,
    handleNoOfBedroomsChange,
    areaRange,
    setAreaRange,
  } = useStore((state) => state.filter);

  return isFilterDialogOpened ? (
    <Card className="pointer-events-auto">
      <Button
        type="text"
        icon={<CloseOutlined />}
        onClick={toggleFilterDialog}
      />

      <div className="mb-3">
        <h3 className="text-primary uppercase">Type</h3>
        {parameters.propertyTypes.map((propertyType) => (
          <div
            key={propertyType.value}
            className="text-xs flex items-center gap-2 mb-2"
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
          </div>
        ))}
      </div>

      <div className="mb-3">
        <h3 className="text-primary uppercase">Views</h3>
        <div>
          {parameters.views.map((view) => (
            <div
              key={view.value}
              className="text-xs flex items-center gap-2 mb-2"
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
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Size (sq ft)</h3>
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
      <Button type="default" onClick={clearFilters}>
        Clear filters
      </Button>
    </Card>
  ) : (
    <Button
      onClick={toggleFilterDialog}
      size="large"
      className="pointer-events-auto"
      icon={<FilterOutlined />}
    />
  );
};

export default Filters;
