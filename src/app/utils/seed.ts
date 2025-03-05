import {
  apartmentSeedData,
  apartmentViewPattern,
} from "../constants/apartmentSeedData";
import { supabase } from "./supabase_client";

async function seedApartments() {
  const apartmentDataWithViews = apartmentSeedData.map((apartment) => {
    return {
      ...apartment,
      views: apartmentViewPattern.get(apartment.apartment_number % 100),
    };
  });

  const { data, error } = await supabase
    .from("apartments")
    .insert(apartmentDataWithViews);

  if (error) {
    console.error("Error seeding apartments:", error);
  } else {
    console.log("Successfully seeded apartments:", data);
  }
}

seedApartments();
