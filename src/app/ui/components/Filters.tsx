"use client";
import { XIcon } from "lucide-react";
import Slider from "rc-slider";
import { useState } from "react";

const filterData = {
  propertyTypes: [
    {
      id: "4526f810-edaa-41a0-88c2-4caa674644e9",
      propertyTypeDisplay: "1 Bedroom",
      propertyType: "1-bedroom",
      order: 1,
      isActive: true,
    },
    {
      id: "151987c3-43ee-4975-98cd-ed2f93500ebd",
      propertyTypeDisplay: "2 Bedroom",
      propertyType: "2-bedroom",
      order: 2,
      isActive: true,
    },
  ],
  views: [
    {
      id: "ffd4e7e6-a3ab-4566-89c5-98af98c7c22f",
      label: "Jumeirah Golf Estates",
      value: "jumeirah-gold-estates",
      order: 1,
      isActive: true,
    },
    {
      id: "12ad6a48-fae2-4c24-b9fa-359e7d3fe33b",
      label: "Sport City Golf Course",
      value: "sport-city-golf-course",
      order: 2,
      isActive: false,
    },
    {
      id: "375074db-806f-4bdd-b2e7-945a3785f9e8",
      label: "Sunset",
      value: "sunset",
      order: 3,
      isActive: false,
    },
    {
      id: "1f4966cb-97bc-45a4-aa37-168a88f243d1",
      label: "Marina Skyline",
      value: "marina-skyline",
      order: 4,
      isActive: false,
    },
  ],
  squareMin: 509.99,
  squareMax: 1783.58,
  priceMin: 773222.0,
  priceMax: 231999222.0,
};

const Filters = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedViews, setSelectedViews] = useState<string[]>([]);
  const [sizeFilter, setSizeFilter] = useState<[number, number]>([
    filterData.priceMin,
    filterData.priceMax,
  ]);

  const handleTypeChange = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((typeId) => typeId !== id) : [...prev, id]
    );
  };

  const handleViewChange = (id: string) => {
    setSelectedViews((prev) =>
      prev.includes(id) ? prev.filter((viewId) => viewId !== id) : [...prev, id]
    );
  };

  return (
    <div className="card w-60 h-96 p-5 relative flex flex-col">
      <XIcon className="absolute right-2 top-2" />
      <div className="mb-3">
        <h3 className="text-primary uppercase">Type</h3>
        {filterData.propertyTypes.map((propertyType) => (
          <div key={propertyType.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id={propertyType.id}
              checked={selectedTypes.includes(propertyType.id)}
              onChange={() => handleTypeChange(propertyType.id)}
            />
            <label htmlFor={propertyType.id}>
              {propertyType.propertyTypeDisplay}
            </label>
          </div>
        ))}
      </div>
      <div className="mb-3">
        <h3 className="text-primary uppercase">Views</h3>
        <div>
          {filterData.views.map((view) => (
            <div key={view.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                name=""
                id={view.id}
                checked={selectedViews.includes(view.id)}
                onChange={() => handleViewChange(view.id)}
              />
              <label htmlFor={view.id}>{view.label}</label>
            </div>
          ))}
        </div>
      </div>
      <h3>Size (sq ft)</h3>
      <Slider
        className="my-3 w-full"
        range
        value={sizeFilter}
        defaultValue={[filterData.priceMin, filterData.priceMax]}
        min={filterData.priceMin}
        max={filterData.priceMax}
        onChange={(value) => {
          if (Array.isArray(value)) {
            setSizeFilter(value as [number, number]);
          }
        }}
      />
      <button className="uppercase w-full bg-primary text-black rounded-md p-2">
        Clear filters
      </button>
    </div>
  );
};

export default Filters;
