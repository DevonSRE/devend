"use client";
import React from "react";
import { useState } from "react";
import { toast } from "sonner";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  date: "",
  needs: "",
  budget: "",
  guest: "",
  message: "",
};

const initialErrors = {
  firstname: "",
  lastname: "",
  email: "",
  date: "",
  needs: "",
  budget: "",
  guest: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!values.firstname.trim())
      newErrors.firstname = "First name is required.";
    if (!values.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!values.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Invalid email format.";
    if (!values.date.trim()) newErrors.date = "Date is required.";
    if (!values.needs.trim()) newErrors.needs = "Planning Needs is required.";
    if (!values.budget.trim()) newErrors.budget = "Budget is required.";
    if (!values.guest.trim()) newErrors.guest = "Guest count is required.";
    if (!values.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleChange = ({ target }) => {
    setValues((prev) => ({ ...prev, [target.name]: target.value }));

    if (touched[target.name]) {
      setErrors((prev) => ({
        ...prev,
        [target.name]: validate()[target.name] || "",
      }));
    }
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));

    setErrors((prev) => ({
      ...prev,
      [target.name]: validate()[target.name] || "",
    }));
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = ({ target: { name, checked } }) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked || false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    console.log({...values, eventTypes: checkedItems});

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    try {
      // Simulate API submission
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({...values, eventTypes: checkedItems}),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        // alert("Message sent successfully!");
        toast.success("Message sent successfully!");
        setValues(initialValues); // Reset form
        setTouched({});
        setCheckedItems({});
      } else {
        // alert("An error occured. Please try again.");
        toast.error("An error occured. Please try again.");
      }
    } catch (error) {
      // alert("An error occured. Please try again.");
      toast.error("An error occured. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-2 mt-6">
      <form className="w-full text-left" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-6 flex gap-4">
          <div className="w-full">
            <label className="block text-sm mb-2 text-[#211434]">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="required**"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.firstname ? "border-red-500" : "border-[#ccc]"
              } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
            />
            {errors.firstname && (
              <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-sm mb-2 text-[#211434]">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="required**"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.lastname ? "border-red-500" : "border-[#ccc]"
              } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
            />
            {errors.lastname && (
              <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="required**"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-[#ccc]"
            } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Event Type */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            Event Type (required)
          </label>
          <div className="flex gap-3 flex-wrap">
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="wedding"
                name="wedding"
                checked={!!checkedItems.wedding}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Wedding Ceremony</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="privateparty"
                name="privateparty"
                checked={!!checkedItems.privateparty}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Private Party</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="dinner"
                name="dinner"
                checked={!!checkedItems.dinner}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Gala Dinner</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="birthday"
                name="birthday"
                checked={!!checkedItems.birthday}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Celebrating a Milestone/Birthday</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="launch"
                name="launch"
                checked={!!checkedItems.launch}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Product Launch</label>
            </div>
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="campaign"
                name="campaign"
                checked={!!checkedItems.campaign}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Campaign</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="fundraise"
                name="fundraise"
                checked={!!checkedItems.fundraise}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Fundraising Event</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="corporate"
                name="corporate"
                checked={!!checkedItems.corporate}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Corporate Event</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="conference"
                name="conference"
                checked={!!checkedItems.conference}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Conference</label>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                id="others"
                name="others"
                checked={!!checkedItems.others}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-blue-200 bg-gray-100 border-[#ccc] rounded-sm"
              />
              <label className="block text-sm mb-2 text-[#211434]">Others</label>
            </div>
          </div>
        </div>

        {/* Event Date */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md date-input ${
              errors.date ? "border-red-500" : "border-[#ccc]"
            } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date}</p>
          )}
        </div>

        {/* Planning Needs */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            Planning Needs
          </label>
          <input
            type="text"
            name="needs"
            placeholder="required**"
            value={values.needs}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.needs ? "border-red-500" : "border-[#ccc]"
            } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.needs && (
            <p className="text-red-500 text-xs mt-1">{errors.needs}</p>
          )}
        </div>

        {/* Estimated Budget */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            Estimated Budget
          </label>
          <input
            type="text"
            name="budget"
            placeholder="required**"
            value={values.budget}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.budget ? "border-red-500" : "border-[#ccc]"
            } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.budget && (
            <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
          )}
        </div>

        {/* Estimated Guest Count */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            Estimated Guest Count
          </label>
          <input
            type="text"
            name="guest"
            placeholder="required**"
            value={values.guest}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.guest ? "border-red-500" : "border-[#ccc]"
            } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.guest && (
            <p className="text-red-500 text-xs mt-1">{errors.guest}</p>
          )}
        </div>

        {/* Additional Information */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-[#211434]">
            How can we help?
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Is there anything  else that you would like to tell us about your planning needs or vision for your event?"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.message ? "border-red-500" : "border-[#ccc]"
            } text-sm placeholder:text-xs placeholder:text-[#2A1C51] focus:outline-none focus:ring-1 focus:ring-blue-400 `}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={
            isLoading 
            // Object.values(errors).some((error) => error) ||
            // Object.values(values).some((value) => !value.trim())
          }
          className={`bg-[#2A1C51] mt-8 px-16 py-3 rounded-lg text-white cursor-pointer ${
            isLoading ||
            Object.values(errors).some((error) => error) ||
            Object.values(values).some((value) => !value.trim())
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
