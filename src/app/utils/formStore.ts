import { create } from "zustand";
import { registerInterest } from "../lib/actions";
import { FormData, FormErrors, initialFormData } from "../types/form";

type FormStore = {
  // Form state
  isFormOpened: boolean;
  setFormOpened: (value: boolean) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  submitSuccess: boolean;
  setSubmitSuccess: (value: boolean) => void;

  //   Form data
  formData: FormData;
  setFormData: (value: Partial<FormData>) => void;
  resetForm: () => void;

  //   Errors
  errors: FormErrors;
  setErrors: (errors: FormErrors) => void;
  clearError: (field: keyof FormData) => void;

  //   Actions
  validateForm: () => boolean;
  handleSubmit: () => Promise<void>;
};

export const useFormStore = create<FormStore>((set, get) => ({
  // Form state
  isFormOpened: false,
  setFormOpened: (value) => set({ isFormOpened: value }),
  isSubmitting: false,
  setIsSubmitting: (value) => set({ isSubmitting: value }),
  submitSuccess: false,
  setSubmitSuccess: (value) => set({ submitSuccess: value }),

  // Form data
  formData: initialFormData,
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () => set({ formData: initialFormData }),

  // Errors
  errors: {},
  setErrors: (errors) => set({ errors }),
  clearError: (field) =>
    set((state) => ({
      errors: {
        ...state.errors,
        [field]: undefined,
      },
    })),
  validateForm: () => {
    const { formData } = get();
    const newErrors: FormErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name should be atleast 3 letters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Phone is required";
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Phone must be a number";
    }

    if (!formData.interestedFloorNumber) {
      newErrors.interestedFloorNumber = "Select a floor";
    }
    if (!formData.interestedApartmentNumber) {
      newErrors.interestedApartmentNumber = "Select an apartment";
    }

    get().setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  },
  handleSubmit: async () => {
    const store = get();

    if (!store.validateForm()) return;

    store.setIsSubmitting(true);
    try {
      await registerInterest(store.formData);

      store.setSubmitSuccess(true);
      store.resetForm();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      store.setIsSubmitting(false);
    }
  },
}));
