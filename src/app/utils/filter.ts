import { Apartment } from "../types/apartment";

export const filterApartments = (
  filters: {
    priceRange: [number, number];
    areaRange: [number, number];
    selectedViews: string[];
    selectedNoOfBedrooms: number[];
  },
  apartments: Apartment[]
): {
  filteredApartments: Apartment[];
  filteredFloors: number[];
} => {
  const { areaRange, selectedNoOfBedrooms, priceRange, selectedViews } =
    filters;
  const filteredApartments = apartments.filter((apartment) => {
    return (
      (selectedNoOfBedrooms.length === 0 ||
        selectedNoOfBedrooms.includes(apartment.numberOfRooms)) &&
      (selectedViews.length === 0 ||
        selectedViews.some((view) => apartment.views.includes(view))) &&
      apartment.price >= priceRange[0] &&
      apartment.price <= priceRange[1] &&
      apartment.area >= areaRange[0] &&
      apartment.area <= areaRange[1]
    );
  });
  const distinctFloors = new Set<number>();
  filteredApartments.forEach(function (apartment) {
    if (apartment.availability === "available") {
      distinctFloors.add(apartment.floor);
    }
  });

  return { filteredApartments, filteredFloors: [...distinctFloors] };
};
