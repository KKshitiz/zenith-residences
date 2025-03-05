"use server";

import { FormData } from "../types/form";
import { supabase } from "../utils/supabase_client";

export async function fetchApartments() {
  const { data: apartmentData, error } = await supabase
    .from("apartments")
    .select("*");

  if (error) {
    console.log(error);
    return [];
  }

  return apartmentData;
}

export async function checkEmployeeExists(
  employeeCode: string
): Promise<boolean> {
  const { data, error } = await supabase
    .from("employees")
    .select("id")
    .eq("code", employeeCode)
    .eq("status", "active")
    .single();

  if (error) {
    console.log(error);
  }
  return data != null;
}

export async function checkApartmentAvailable(
  floor: number,
  apartmentNumber: number
): Promise<boolean> {
  const { data, error } = await supabase
    .from("apartments")
    .select("id")
    .eq("floor", floor)
    .eq("apartment_number", apartmentNumber)
    .eq("availability", "available")
    .single();

  console.log(data);
  if (error) {
    console.log(error);
  }

  return data != null;
}

export async function registerInterest(formData: FormData) {
  const isApartmentAvailable = await checkApartmentAvailable(
    formData.interestedFloorNumber,
    formData.interestedApartmentNumber
  );
  if (!isApartmentAvailable) {
    // show error: Apartment invalid or not available for reservation
    return;
  }

  if (formData.salesEmployeeCode) {
    const employeeExists = await checkEmployeeExists(
      formData.salesEmployeeCode
    );
    console.log("Employee exists", employeeExists);

    if (!employeeExists) {
      // show error: Invalid employee code or employee blocked.
      return;
    }

    const updateApartmentAvailabilityResponse = await supabase
      .from("apartments")
      .update({ availability: "reserved" })
      .eq("floor", formData.interestedFloorNumber)
      .eq("apartment_number", formData.interestedApartmentNumber)
      .select();
    console.log(updateApartmentAvailabilityResponse.data);
    console.log(updateApartmentAvailabilityResponse.error);
  }

  const { data, error } = await supabase
    .from("customer_interests")
    .insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        contact_number: formData.contactNumber,
        interested_floor_number: formData.interestedFloorNumber,
        interested_apartment_number: formData.interestedApartmentNumber,
        sales_employee_code: formData.salesEmployeeCode,
      },
    ])
    .select();

  if (error) {
    console.log(error);
  }
  console.log(data);
}
