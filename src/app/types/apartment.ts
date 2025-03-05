import { apartmentSvgPaths } from "../constants/apartmentSvgPaths";

export type Apartment = {
  floor: number;
  price: number;
  area: number;
  numberOfRooms: number;
  unitNumber: number;
  availability: "available" | "reserved" | "sold";
  views: string[];
  svgPath: string;
};

export type ApartmentModel = {
  id: number;
  created_at: Date;
  floor: number;
  price: number;
  area: number;
  number_of_rooms: number;
  apartment_number: number;
  availability: "available" | "reserved" | "sold";
  views: string[];
};

export const getApartmentFromModel = (model: ApartmentModel) => {
  const apartmentSvgPath: string = apartmentSvgPaths.find(
    (svgPath) => svgPath.unitNumber == model.apartment_number % 100
  )!.path;

  return {
    unitNumber: model.apartment_number,
    area: model.area,
    availability: model.availability,
    floor: model.floor,
    numberOfRooms: model.number_of_rooms,
    price: model.price,
    views: model.views,
    svgPath: apartmentSvgPath,
  };
};
