"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

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
  eventType: "",
};

const eventTypes = [
  { id: "wedding", label: "Wedding Ceremony" },
  { id: "privateparty", label: "Private Party" },
  { id: "dinner", label: "Gala Dinner" },
  { id: "birthday", label: "Celebrating a Milestone/Birthday" },
  { id: "launch", label: "Product Launch" },
  { id: "campaign", label: "Campaign" },
  { id: "fundraise", label: "Fundraising Event" },
  { id: "corporate", label: "Corporate Event" },
  { id: "conference", label: "Conference" },
  { id: "others", label: "Others" },
];

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const validate = (values, checkedItems) => {
    const newErrors = {};
    if (!values.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!values.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!values.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = "Invalid email format.";
    if (!values.date) newErrors.date = "Date is required.";
    if (!values.needs.trim()) newErrors.needs = "Planning needs are required.";
    if (!values.budget.trim()) newErrors.budget = "Budget is required.";
    if (!values.guest.trim()) newErrors.guest = "Guest count is required.";
    if (!Object.values(checkedItems).some((isChecked) => isChecked)) {
      newErrors.eventType = "At least one event type must be selected.";
    }
    return newErrors;
  };

  const handleChange = ({ target }) => {
    setValues((prev) => ({ ...prev, [target.name]: target.value }));
    if (touched[target.name]) {
      setErrors((prev) => ({
        ...prev,
        [target.name]: validate({ ...values, [target.name]: target.value }, checkedItems)[target.name] || "",
      }));
    }
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
    setErrors((prev) => ({
      ...prev,
      [target.name]: validate(values, checkedItems)[target.name] || "",
    }));
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setErrors((prev) => ({
      ...prev,
      eventType: validate(values, { ...checkedItems, [id]: !checkedItems[id] }).eventType || "",
    }));
  };

  const handleDateChange = (date) => {
    setValues((prev) => ({ ...prev, date }));
    if (touched.date) {
      setErrors((prev) => ({
        ...prev,
        date: validate({ ...values, date }, checkedItems).date || "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values, checkedItems);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ ...values, eventTypes: checkedItems }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setValues(initialValues);
        setTouched({});
        setCheckedItems({});
        setErrors(initialErrors);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = () => {
    const allRequiredFieldsEmpty = [
      values.firstname.trim(),
      values.lastname.trim(),
      values.email.trim(),
      values.needs.trim(),
      values.budget.trim(),
      values.guest.trim(),
    ].some((field) => field === "") || !values.date;

    const isEventTypeSelected = Object.values(checkedItems).some((isChecked) => isChecked);
    return isLoading || allRequiredFieldsEmpty || !isEventTypeSelected || Object.keys(errors).some((key) => errors[key]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-16">


      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="required*"
              required
            />
            {errors.firstname && <p className="text-red-500 text-xs">{errors.firstname}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="required*"
              required
            />
            {errors.lastname && <p className="text-red-500 text-xs">{errors.lastname}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="required*"
            required
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div className="space-y-3">
          <Label>Event Type (required)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {eventTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`event-${type.id}`}
                  checked={checkedItems[type.id] || false}
                  onCheckedChange={() => handleCheckboxChange(type.id)}
                />
                <Label htmlFor={`event-${type.id}`} className="font-normal">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.eventType && <p className="text-red-500 text-xs">{errors.eventType}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Event Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                {values.date ? format(values.date, "MM/dd/yy") : (
                  <span className="text-muted-foreground">mm/dd/yy</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={values.date}
                onSelect={handleDateChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="needs">Planning Needs</Label>
          <Input
            id="needs"
            name="needs"
            value={values.needs}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="required*"
            required
          />
          {errors.needs && <p className="text-red-500 text-xs">{errors.needs}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <Input
              id="budget"
              name="budget"
              type="number"
              value={values.budget}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="required*"
              required
            />
            {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="guest">Estimated Guest Count</Label>
            <Input
              id="guest"
              name="guest"
              type="number"
              value={values.guest}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="required*"
              required
            />
            {errors.guest && <p className="text-red-500 text-xs">{errors.guest}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Information</Label>
          <Textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Is there anything else that you would like to tell us about your planning needs or vision for your event?"
            className="min-h-[120px]"
          />
        </div>

        <Button
          type="submit"
          disabled={isButtonDisabled()}
          className="w-full sm:w-auto bg-[#2e1a47] hover:bg-[#3b2259]"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;