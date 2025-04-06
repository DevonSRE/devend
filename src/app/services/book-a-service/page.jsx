"use client"


import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

// Separate type definitions for clarity
const eventTypes = [
  { id: "wedding-ceremony", label: "Wedding Ceremony" },
  { id: "private-party", label: "Private Party" },
  { id: "gala-dinner", label: "Gala Dinner" },
  { id: "milestone-birthday", label: "Celebrating a Milestone/Birthday" },
  { id: "product-launch", label: "Product Launch" },
  { id: "campaign", label: "Campaign" },
  { id: "fundraising-event", label: "Fundraising Event" },
  { id: "corporate-event", label: "Corporate Event" },
  { id: "conference", label: "Conference" },
  { id: "logistics", label: "Logistics" },
  { id: "others", label: "Others" },
]

const logisticsTypes = [
  { id: "car-hire", label: "Car Hire" },
  { id: "fleet-management", label: "Fleet Management" },
  { id: "dispatch-services", label: "Dispatch Services" },
  { id: "event-specifics", label: "Event Specifics" },
  { id: "flight-booking", label: "Flight Booking" },
  { id: "hotel-reservation", label: "Hotel Reservation" },
  { id: "executive-airport", label: "Executive Airport Pick-ups" },
  { id: "wedding-tours", label: "Wedding Tours & Retreats" },
]

export default function LogisticsForm() {
  // Separate state for each form
  const [eventDate, setEventDate] = useState(undefined)
  const [fromDate, setFromDate] = useState(undefined)
  const [toDate, setToDate] = useState(undefined)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Create an Unforgettable Experience</h1>
        <div className="text-sm text-gray-600 space-y-1">
          <p>For general enquires and issues:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <p>
              Email:{" "}
              <a href="mailto:info@devend.com" className="font-medium">
                info@devend.com
              </a>
            </p>
            <p>
              Telephone:{" "}
              <a href="tel:+2348030000000" className="font-medium">
                +234 (803) 000 0000
              </a>
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="event" className="w-full mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-100">
          <TabsTrigger
            value="event"
            className="data-[state=active]:bg-[#2e1a47] data-[state=active]:text-white"
          >
            Event Management
          </TabsTrigger>
          <TabsTrigger
            value="logistics"
            className="data-[state=active]:bg-[#2e1a47] data-[state=active]:text-white"
          >
            Logistics Services
          </TabsTrigger>
        </TabsList>
        <TabsContent value="event">
          <div className="mt-6 text-center mb-8">
            <p className="max-w-2xl mx-auto">
              For event inquiries, please fill out the form below and one of our team members will get back to you
              within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="eventFirstName">First Name</Label>
                <Input id="eventFirstName" placeholder="required**" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventLastName">Last Name</Label>
                <Input id="eventLastName" placeholder="required**" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="eventEmail">Email Address</Label>
                <Input id="eventEmail" type="email" placeholder="required**" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventPhone">Phone Number</Label>
                <Input id="eventPhone" type="tel" placeholder="required**" required />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Event Type (required)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {eventTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={`event-${type.id}`} />
                    <Label htmlFor={`event-${type.id}`} className="font-normal">
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      {eventDate ? (
                        format(eventDate, "MM/dd/yy")
                      ) : (
                        <span className="text-muted-foreground">mm/dd/yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={eventDate} onSelect={setEventDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="planningNeeds">Planning Needs</Label>
                <Input id="planningNeeds" placeholder="required**" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="estimatedBudget">Estimated Budget</Label>
                <Input id="estimatedBudget" placeholder="required**" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guestCount">Estimated Guest Count</Label>
                <Input id="guestCount" placeholder="required**" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventAdditional">Additional Information</Label>
              <Textarea
                id="eventAdditional"
                placeholder="Is there anything else that you would like to tell us about your planning needs or vision for your event?"
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto bg-[#2e1a47] hover:bg-[#3b2259]">
              Submit
            </Button>
          </form>
        </TabsContent>
        <TabsContent value="logistics">
          <div className="mt-6 text-center mb-8">
            <p className="max-w-2xl mx-auto">
              To provide you with cost estimate for your logistics needs, please fill out the form below and one of our
              team members will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="required*" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="required*" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="required*" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="required*" required />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Logistics Type (required)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {logisticsTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={`logistics-${type.id}`} />
                    <Label htmlFor={`logistics-${type.id}`} className="font-normal">
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fromDate">From:</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      {fromDate ? (
                        format(fromDate, "MM/dd/yy")
                      ) : (
                        <span className="text-muted-foreground">mm/dd/yy</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={fromDate} onSelect={setFromDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="toDate">To:</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      {toDate ? format(toDate, "MM/dd/yy") : <span className="text-muted-foreground">mm/dd/yy</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={toDate} onSelect={setToDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin Location</Label>
                <Input id="origin" placeholder="required*" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" placeholder="required*" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo Details (If any)</Label>
              <Input id="cargo" placeholder="placeholder" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional">Additional Information</Label>
              <Textarea
                id="additional"
                placeholder="Is there anything else that you would like to tell us?"
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto bg-[#2e1a47] hover:bg-[#3b2259]">
              Submit
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

