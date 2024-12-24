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
    {
      id: "9a46771b-8e57-4ae3-a060-b84da691d7c9",
      propertyTypeDisplay: "2 Bedroom Duplex",
      propertyType: "2-bedroom-duplex",
      order: 3,
      isActive: false,
    },
    {
      id: "1efe5b67-7032-48e2-94e6-adf2cd1bd604",
      propertyTypeDisplay: "3 Bedroom",
      propertyType: "3-bedroom",
      order: 4,
      isActive: false,
    },
    {
      id: "b518d0d8-df89-4bf0-960d-bdd7cf81fb7c",
      propertyTypeDisplay: "3 Bedroom Duplex",
      propertyType: "3-bedroom-duplex",
      order: 5,
      isActive: false,
    },
    {
      id: "8033bfb3-2ae1-416a-ad31-5d454fe8b0a1",
      propertyTypeDisplay: "Studio",
      propertyType: "studio",
      order: 6,
      isActive: false,
    },
  ],
  views: [
    {
      id: "ffd4e7e6-a3ab-4566-89c5-98af98c7c22f",
      label: "Community",
      value: "community",
      order: 1,
      isActive: false,
    },
    {
      id: "12ad6a48-fae2-4c24-b9fa-359e7d3fe33b",
      label: "Park view",
      value: "park-view",
      order: 2,
      isActive: false,
    },
    {
      id: "375074db-806f-4bdd-b2e7-945a3785f9e8",
      label: "Five view",
      value: "five-view",
      order: 3,
      isActive: false,
    },
    {
      id: "1f4966cb-97bc-45a4-aa37-168a88f243d1",
      label: "City view",
      value: "city-view",
      order: 4,
      isActive: false,
    },
  ],
  squareMin: 888,
  squareMax: 1644,
  priceMin: 1086000,
  priceMax: 2362000,
};

const Filters = () => {
  return <div className="filters w-60 h-96 bg-dark"></div>;
};

export default Filters;
