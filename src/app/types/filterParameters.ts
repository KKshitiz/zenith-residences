export type FilterParameters = {
  propertyTypes: {
    propertyTypeDisplay: string;
    value: number;
    enabled: boolean;
  }[];

  views: { label: string; value: string; enabled: boolean }[];
  areaMin: number;
  areaMax: number;
  priceMin: number;
  priceMax: number;
};
