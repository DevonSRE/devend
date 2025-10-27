"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Loader2Icon } from "lucide-react";
import { format } from "date-fns";

import uniqueImg from "../../../../public/about-us-cropped.png";
import TestimonialCarousel from "@/app/_component/TestimonialCarousel";
import { TrustedBy } from "@/app/_component/TrustedBy";

const eventTypes = [
  { id: "corporate-event", label: "Corporate Event" },
  { id: "ngos", label: "NGOs" },
  { id: "wedding-ceremony", label: "Wedding Ceremony" },
  { id: "private-party", label: "Private Party" },
  { id: "gala-dinner", label: "Gala Dinner" },
  { id: "milestone-birthday", label: "Celebrating a Milestone/Birthday" },
  { id: "product-launch", label: "Product Launch" },
  { id: "campaign", label: "Campaign" },
  { id: "fundraising-event", label: "Fundraising Event" },
  { id: "conference", label: "Conference" },
  { id: "logistics", label: "Logistics" },
  { id: "others", label: "Others" },
];

export default function Page() {
  const [eventDate, setEventDate] = useState(undefined);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    needs: "",
    budget: "",
    guest: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [isOthers, setIsOthers] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values, checkedItems);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    const payload = {
      ...values,
      eventTypes: checkedItems,
      service: "event-management",
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setValues({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          date: "",
          needs: "",
          budget: "",
          guest: "",
          message: "",
        });
        setCheckedItems({});
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateChange = (date) => {
    setEventDate(date);
    setValues((prev) => ({
      ...prev,
      date: date ? format(date, "yyyy-MM-dd") : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  /*
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setCheckedItems(prev => ({ ...prev, [name]: checked }))
  }
  */

  const validate = (values, checkedItems) => {
    const errors = {};
    if (!values.firstname) errors.firstname = "First name is required";
    if (!values.lastname) errors.lastname = "Last name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.phone) errors.phone = "Phone number is required";
    if (!values.date) errors.date = "Date is required";
    if (!values.needs) errors.needs = "Planning needs are required";
    if (!values.budget) errors.budget = "Budget is required";
    if (!values.guest) errors.guest = "Guest count is required";

    if (!Object.values(checkedItems).some(Boolean)) {
      errors.eventType = "Please select at least one event type";
    }
    if (Object.keys(checkedItems).includes("others")) {
      if (checkedItems.others === "") {
        errors.eventType = "Please provide details for other event type";
      }
    }

    return errors;
  };

  const addToCheckedItems = (itemId, value) => {
    const selectedEventType = eventTypes.find((type) => type.id === itemId);
    setCheckedItems((prev) => ({
      ...prev,
      [selectedEventType.id]: value ?? selectedEventType.label,
    }));
  };

  const handleEventTypeChange = (id, isChecked) => {
    if (isChecked) {
      if (id === "others") {
        setIsOthers(true);
        addToCheckedItems("others", "");
      } else {
        addToCheckedItems(id);
      }
    } else {
      // TODO: remove from list of checkedItems
      const selectedEventType = eventTypes.find((type) => type.id === id);
      setCheckedItems((prev) => {
        // ({ ...prev, [selectedEventType.id]: "" })
        const itemCopy = { ...prev };
        const isDelete = delete itemCopy[selectedEventType.id];
        if (isDelete) {
          return { ...itemCopy };
        } else {
          return { ...prev };
        }
      });
      if (id === "others") {
        setIsOthers(false);
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center max-w-[660px] mx-auto">
          <h1 className="text-[#211434] text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Crafting Unforgettable
            <br />
            Corporate Events
          </h1>
          <p className="text-sm md:text-base text-[#211434]/80 max-w-[540px] mx-auto">
            DEV-END is your trusted partner for crafting unforgettable corporate
            events, from conferences to corporate meetings, seminars and wedding
            events.
          </p>
        </div>
      </section>

      {/* Full Service Event Management */}
      <section className="bg-[#211434] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
              Full Service Event Management
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-4">
              We don't just plan an event; we create an experience.
            </p>
            <p className="text-white/80 text-sm md:text-base">
              From sourcing the ideal venue to the final, thoughtful details,
              DEV-END's expertise and creativity ensure your corporate event
              surpasses expectations and achieves real results. We handle the
              logistics, so you can focus on the big picture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Corporate Events and Conferences",
              "NGOs",
              "Charity Events",
              "Educational Seminars",
              "Retreats and Workshops",
              "Product and Business Launch",
              "Weddings, Birthdays and Dinners",
            ].map((service) => (
              <div key={service} className="flex items-center gap-4">
                <div className="bg-[#EDCC19] w-8 h-0.5"></div>
                <span className="text-white text-sm md:text-base">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help You Succeed Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={uniqueImg}
                  alt="An image of a beautifully decorated table"
                  fill
                  className="object-cover w-full h-full rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2A1C51] w-8 h-0.5"></div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#211434]">
                  We are here to help you succeed.
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#211434]/80">
                We are your trusted partner in crafting unforgettable corporate
                events. In a world of fleeting moments, we create experiences
                that endure. We work closely with you, understanding your unique
                needs and translating them into events that engage and inspire.
                From concept to completion, we handle every aspect with
                precision and care. Our commitment to excellence ensures that
                your event not only meets but exceeds your expectations, leaving
                a lasting legacy for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />
      {/*<section className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex-1 h-0.5 bg-[#211434]/10"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-[#211434] px-4">
              Trusted By
            </h3>
            <div className="flex-1 h-0.5 bg-[#211434]/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <div className="absolute w-full h-0.5 bg-[#211434]/10 -bottom-2"></div>
            {[
              { title: "NON-PROFIT ORGANIZATIONS", subtitle: "Clients" },
              { title: "CORPORATE", subtitle: "Clients" },
              { title: "PERSONAL", subtitle: "Clients" }
            ].map((category) => (
              <div key={category.title} className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-[#211434]">{category.title}</h4>
                <p className="text-sm text-[#211434]/70">{category.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Testimonial Section */}
      <section className="bg-[#FEFBEC] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-[#211434]">
              Don't Just Take Our Word For It
            </h2>
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-full bg-white py-12 md:py-16 px-4">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Let&apos;s Create an Unforgettable Experience
            </h2>

            <div className="mt-4 text-center">
              <p className="max-w-2xl mx-auto text-sm sm:text-base">
                For event inquiries, please fill out the form below and one of
                our team members will get back to you within 24 hours.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="firstName" className="text-sm sm:text-base">
                  First Name (requird)
                </Label>
                <Input
                  id="firstName"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.firstname && (
                  <span className="text-xs text-destructive">
                    *{errors.firstname}
                  </span>
                )}
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="lastName" className="text-sm sm:text-base">
                  Last Name (requird)
                </Label>
                <Input
                  id="lastName"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.lastname && (
                  <span className="text-xs text-destructive">
                    *{errors.lastname}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email Address (requird)
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="required*"
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.email && (
                  <span className="text-xs text-destructive">
                    *{errors.email}
                  </span>
                )}
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="phone" className="text-sm sm:text-base">
                  Phone Number (requird)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.phone && (
                  <span className="text-xs text-destructive">
                    *{errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="company" className="text-sm sm:text-base">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="optional"
                className="text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2 md:space-y-3">
              <Label className="text-sm sm:text-base">
                Event Type (required)
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {eventTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      onCheckedChange={(checked) =>
                        handleEventTypeChange(type.id, checked)
                      }
                      id={`event-${type.id}`}
                    />
                    <Label
                      htmlFor={`event-${type.id}`}
                      className="text-sm sm:text-base font-normal"
                    >
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
              {isOthers && (
                <div className="max-w-80 h-fit flex items-center gap-2 justify-end ml-auto">
                  <Input
                    type="text"
                    placeholder="Enter other event type here"
                    value={checkedItems.others || ""}
                    onChange={(e) => {
                      addToCheckedItems("others", e.target.value);
                    }}
                    className="text-sm sm:text-base"
                  />
                </div>
              )}
              {Object.keys(errors).length > 0 && errors?.eventType && (
                <span className="text-xs text-destructive">
                  *{errors.eventType}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="eventDate" className="text-sm sm:text-base">
                  Event Date (required)
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      {eventDate ? (
                        format(eventDate, "dd-MM-yyyy")
                      ) : (
                        <span className="text-muted-foreground">mm/dd/yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="flex flex-col w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={eventDate}
                      onSelect={handleDateChange}
                      captionLayout="dropdown-months"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {Object.keys(errors).length > 0 && errors?.date && (
                  <span className="text-xs text-destructive">
                    *{errors.date}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="planningNeeds" className="text-sm sm:text-base">
                  Planning Needs (required)
                </Label>
                <Input
                  name="needs"
                  value={values.needs}
                  onChange={handleChange}
                  id="planningNeeds"
                  placeholder="required*"
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.needs && (
                  <span className="text-xs text-destructive">
                    *{errors.needs}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="estimatedBudget"
                  className="text-sm sm:text-base"
                >
                  Estimated Budget (requird)
                </Label>
                <Input
                  id="estimatedBudget"
                  placeholder="required*"
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.budget && (
                  <span className="text-xs text-destructive">
                    *{errors.budget}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="guestCount" className="text-sm sm:text-base">
                  Estimated Guest Count (requird)
                </Label>
                <Input
                  id="guestCount"
                  name="guest"
                  value={values.guest}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                  className="text-sm sm:text-base"
                />
                {Object.keys(errors).length > 0 && errors?.guest && (
                  <span className="text-xs text-destructive">
                    *{errors.guest}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo" className="text-sm sm:text-base">
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Is there anything else that you would like to tell us about your planning needs or vision for your event?"
                className="min-h-[120px] text-sm sm:text-base"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-52 bg-[#2e1a47] hover:bg-[#3b2259] text-white text-sm sm:text-base px-8 py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="h-4 w-4 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
