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

import logisticImg from "../../../../public/logistic-1.png";
import TestimonialCarousel from "@/app/_component/TestimonialCarousel";
import { TrustedBy } from "@/app/_component/TrustedBy";

const eventTypes = [
  { id: "car-hire", label: "Car Hire" },
  { id: "fleet-management", label: "Fleet Management" },
  { id: "dispatch-services", label: "Dispatch Services" },
  { id: "event-specifics", label: "Event Specifics" },
  { id: "flight-booking", label: "Flight Booking" },
  { id: "hotel-reservation", label: "Hotel Reservation" },
  { id: "executive-airport-pickups", label: "Executive Airport Pick-ups" },
  { id: "wedding-tours & Retreats", label: "Wedding Tours & Retreats" },
  { id: "logistics", label: "Logistics" },
  { id: "conference", label: "Conference" },
  { id: "others", label: "Others" },
];
/*
const logisticsTypes = [
  { id: 'car-hire', label: 'Car Hire' },
  { id: 'fleet-management', label: 'Fleet Management' },
  { id: 'dispatch-services', label: 'Dispatch Services' },
  { id: 'event-specifics', label: 'Event Specifics' },
  { id: 'flight-booking', label: 'Flight Booking' },
  { id: 'hotel-reservation', label: 'Hotel Reservation' },
  { id: 'airport-pickups', label: 'Executive Airport Pick-ups' },
  { id: 'wedding-tours', label: 'Wedding Tours & Retreats' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'conference', label: 'Conference' },
  { id: 'others', label: 'Others' }
];
*/

const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  company: "",
  fromDate: "",
  toDate: "",
  guest: "",
  message: "",
  location: "",
  destination: "",
  cargo: "",
};

export default function Page() {
  const [fromDate, setFromDate] = useState(undefined);
  const [toDate, setToDate] = useState(undefined);
  // const [eventDate, setEventDate] = useState(undefined);

  // Form state
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [isOthers, setIsOthers] = useState(false);

  // Form handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values, checkedItems);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    const payload = {
      ...values,
      eventTypes: checkedItems,
      service: "logistics",
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
        setValues(defaultValues);
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

  const handleDateChange = (date, type) => {
    switch (type) {
      case "fromDate":
        setFromDate(date);
        break;
      case "toDate":
        setToDate(date);
        break;
      default:
        break;
    }
    setValues((prev) => ({
      ...prev,
      [type]: date ? format(date, "yyyy-MM-dd") : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const validate = (values, checkedItems) => {
    const errors = {};
    if (!values.firstname) errors.firstname = "First name is required";
    if (!values.lastname) errors.lastname = "Last name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.phone) errors.phone = "Phone number is required";
    if (!values.fromDate) errors.fromDate = "From Date is required";
    if (!values.toDate) errors.toDate = "To Date is required";
    if (!values.guest) errors.guest = "Guest count is required";
    if (!values.location) errors.location = "Location is required";
    if (!values.destination) errors.destination = "Destination is required";

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

  /*
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems(prev => ({ ...prev, [name]: checked }));
  };
  */

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="text-center max-w-[660px] mx-auto">
          <h1 className="text-[#211434] text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Event Logistics & Executive Travels
          </h1>
          <p className="text-sm md:text-base text-[#211434]/80 max-w-[540px] mx-auto">
            Experience the difference with our dedicated event and executive
            travel services.
          </p>
        </div>
      </section>

      <section className="bg-[#211434] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
              Smooth Transitions For Every Event & Executive Travel Need.
            </h2>
            <p className="text-white/90 text-sm md:text-base mb-4">
              We don't just plan an event, we create an experience.
            </p>
            <p className="text-white/80 text-sm md:text-base">
              From start to finish, DEV-END's logistics expertise ensures
              seamless delivery and real results. We handle the challenges, so
              you can focus on opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-[#EDCC19] w-2 h-2 rounded-full"></div>
              <span className="text-white text-sm md:text-base">
                Car hire, fleet management and dispatch services.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#EDCC19] w-2 h-2 rounded-full"></div>
              <span className="text-white text-sm md:text-base">
                Event-specifics logistics for weddings tours and retreat.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#EDCC19] w-2 h-2 rounded-full"></div>
              <span className="text-white text-sm md:text-base">
                Real time GPS tracking.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#EDCC19] w-2 h-2 rounded-full"></div>
              <span className="text-white text-sm md:text-base">
                Flight booking, Executive airport pickups, Hotel Reservation,
                and so on
              </span>
            </div>
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
                  src={logisticImg}
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
                  We've got you covered
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#211434]/80">
                DEV-END provides more than just transportation; we offer peace
                of mind. We take the time to understand your unique logistics
                challenges and develop tailored solutions that optimize your
                supply chain. From meticulous planning to real-time tracking, we
                handle every detail with precision and care. Our commitment to
                transparency and efficiency ensures your goods are delivered
                safely and on time, every time. With DEV-END, you can focus on
                growing your business, knowing your logistics are in expert
                hands.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />
      {/*<section className='container mx-auto px-4 md:px-6 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center justify-center gap-4 mb-2'>
            <div className='flex-1 h-0.5 bg-[#211434]/10'></div>
            <h3 className='text-xl sm:text-2xl font-semibold text-center text-[#211434] px-4'>
              Trusted By
            </h3>
            <div className='flex-1 h-0.5 bg-[#211434]/10'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative'>
            <div className='absolute w-full h-0.5 bg-[#211434]/10 -bottom-2'></div>
            {[
              { title: 'NON-PROFIT ORGANIZATIONS', subtitle: 'Clients' },
              { title: 'CORPORATE', subtitle: 'Clients' },
              { title: 'PERSONAL', subtitle: 'Clients' },
            ].map((category) => (
              <div key={category.title} className='p-6'>
                <h4 className='text-lg font-semibold mb-2 text-[#211434]'>
                  {category.title}
                </h4>
                <p className='text-sm text-[#211434]/70'>{category.subtitle}</p>
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
              {/*Let&apos;s Create an Unforgettable Experience*/}
              Book A Ride
            </h2>

            <div className="mt-4 text-center">
              <p className="max-w-2xl mx-auto text-sm sm:text-base">
                For logistics inquiry, please fill out the form below and one of
                our team members will get back to you within 24 hours.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                />
                {Object.keys(errors).length > 0 && errors?.firstname && (
                  <span className="text-xs text-destructive">
                    *{errors.firstname}
                  </span>
                )}
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                />
                {Object.keys(errors).length > 0 && errors?.lastname && (
                  <span className="text-xs text-destructive">
                    *{errors.lastname}
                  </span>
                )}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="required*"
                  required
                />
                {Object.keys(errors).length > 0 && errors?.email && (
                  <span className="text-xs text-destructive">
                    *{errors.email}
                  </span>
                )}
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="required*"
                  required
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

            {/* Logistics Type */}
            <div className="space-y-2 md:space-y-3">
              <Label>Logistics Type (required)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {eventTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type.id}`}
                      onCheckedChange={(checked) =>
                        handleEventTypeChange(type.id, checked)
                      }
                    />
                    <Label htmlFor={`type-${type.id}`}>{type.label}</Label>
                  </div>
                ))}
              </div>
              {isOthers && (
                <div className="max-w-80 h-fit flex items-center gap-2 justify-end ml-auto">
                  <Input
                    type="text"
                    name="others"
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

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label>From:</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      {fromDate ? (
                        format(fromDate, "MM/dd/yy")
                      ) : (
                        <span className="text-muted-foreground">mm/dd/yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={fromDate}
                      onSelect={(date) => {
                        handleDateChange(date, "fromDate");
                        // setFromDate(date);
                        // setValues(prev => ({ ...prev, fromDate: date }));
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {Object.keys(errors).length > 0 && errors?.fromDate && (
                  <span className="text-xs text-destructive">
                    *{errors.fromDate}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label>To:</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      {toDate ? (
                        format(toDate, "MM/dd/yy")
                      ) : (
                        <span className="text-muted-foreground">mm/dd/yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={(date) => {
                        handleDateChange(date, "toDate");
                        // setToDate(date)
                        // setValues(prev => ({ ...prev, fromDate: date }));
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {Object.keys(errors).length > 0 && errors?.toDate && (
                  <span className="text-xs text-destructive">
                    *{errors.toDate}
                  </span>
                )}
              </div>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label>Origin Location</Label>
                <Input
                  name="location"
                  value={values.location}
                  placeholder="required*"
                  onChange={handleChange}
                  required
                />
                {Object.keys(errors).length > 0 && errors?.location && (
                  <span className="text-xs text-destructive">
                    *{errors.location}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label>Destination</Label>
                <Input
                  name="destination"
                  value={values.destination}
                  placeholder="required*"
                  onChange={handleChange}
                  required
                />
                {Object.keys(errors).length > 0 && errors?.destination && (
                  <span className="text-xs text-destructive">
                    *{errors.destination}
                  </span>
                )}
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label>Cargo Details (If any)</Label>
                <Input
                  name="cargo"
                  value={values.cargo}
                  onChange={handleChange}
                  placeholder="Cargo details"
                />
              </div>
              <div className="space-y-2">
                <Label>Estimated Guest Count</Label>
                <Input
                  name="guest"
                  value={values.guest}
                  onChange={handleChange}
                  placeholder="required*"
                  required
                />
                {Object.keys(errors).length > 0 && errors?.guest && (
                  <span className="text-xs text-destructive">
                    *{errors.guest}
                  </span>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <Label>Additional Information</Label>
              <Textarea
                placeholder="Is there anything else that you would like to tell us ?"
                name="message"
                value={values.message}
                onChange={handleChange}
                className="min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full sm:w-52 bg-[#2e1a47] hover:bg-[#3b2259] text-white px-8 py-3"
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
