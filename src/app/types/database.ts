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
