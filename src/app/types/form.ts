export type FormData = {
  fullName: string;
  email: string;
  contactNumber: string;
  interestedFloorNumber: number;
  interestedApartmentNumber: number;
  salesEmployeeCode?: string;
};

export type FormErrors = {
  fullName?: string;
  email?: string;
  contactNumber?: string;
  interestedFloorNumber?: string;
  interestedApartmentNumber?: string;
  salesEmployeeCode?: string;
};

export const initialFormData: FormData = {
  fullName: "",
  contactNumber: "",
  email: "",
  salesEmployeeCode: "",
  interestedApartmentNumber: 0,
  interestedFloorNumber: 0,
};
