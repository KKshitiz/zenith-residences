"use client";
import { MailIcon, PhoneIcon, UserIcon, XIcon } from "lucide-react";
import React, { useState } from "react";

const BrochureForm = () => {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    note: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
      valid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a number";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }
    if (!formData.note) {
      newErrors.note = "Note is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData);
      setOpen(false);
    }
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-dark p-6 rounded shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              <XIcon />
            </button>
            <h2 className="text-xl mb-4 text-center">
              Fill in the form below to get a free consultation and brochure of
              the project
            </h2>
            <InputField
              name="firstName"
              type="text"
              placeholder="First name *"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              icon={UserIcon}
            />{" "}
            <InputField
              name="lastName"
              type="text"
              placeholder="Last name *"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              icon={UserIcon}
            />{" "}
            <InputField
              name="phone"
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              icon={PhoneIcon}
            />
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              icon={MailIcon}
            />
            <div className="mb-4 relative">
              <textarea
                className="w-full px-3 py-2 border rounded pl-10 bg-transparent"
                name="note"
                rows={4}
                placeholder="Note"
                value={formData.note}
                onChange={handleChange}
              />
              <span className="absolute left-3 top-2 text-gray-500">
                <i className="fas fa-sticky-note"></i>
              </span>
              {errors.note && (
                <p className="text-red-500 text-sm">{errors.note}</p>
              )}
            </div>
            <div className="flex">
              <button
                className="bg-primary w-full uppercase text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Get brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { LucideIcon } from "lucide-react";

const InputField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
}: {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: string;
  icon: LucideIcon;
}) => (
  <div className="mb-4 relative">
    <input
      className={`w-full px-3 py-2 border rounded pl-10 bg-transparent ${
        error ? "border-red-500" : "border-gray-300"
      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <span className="absolute left-3 top-3 text-gray-500">
      <Icon size={15} color="white" />
    </span>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default BrochureForm;
