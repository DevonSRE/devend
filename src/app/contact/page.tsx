"use client"

import { useState } from "react"
import { toast } from "sonner"
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

interface EventFormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  date: Date | string
  needs: string
  budget: string
  guest: string
  message: string
  eventTypes: Record<string, boolean>
}

interface LogisticsFormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  fromDate: Date | string
  toDate: Date | string
  origin: string
  destination: string
  cargoDetails: string
  message: string
  logisticsTypes: Record<string, boolean>
}

interface EventTypeOption {
  id: string
  label: string
}

const eventTypes: EventTypeOption[] = [
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

const logisticsTypes: EventTypeOption[] = [
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
  const [eventFormData, setEventFormData] = useState<EventFormData>({
    firstname: "", lastname: "", email: "", phone: "", date: "", needs: "", budget: "", guest: "", message: "", eventTypes: {},
  })

  const [logisticsFormData, setLogisticsFormData] = useState<LogisticsFormData>({
    firstname: "", lastname: "", email: "", phone: "", fromDate: "", toDate: "", origin: "", destination: "", cargoDetails: "", message: "", logisticsTypes: {},
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEventFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogisticsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setLogisticsFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEventTypeChange = (id: string) => {
    setEventFormData((prev) => ({ ...prev, eventTypes: { ...prev.eventTypes, [id]: !prev.eventTypes[id] } }))
  }

  const handleLogisticsTypeChange = (id: string) => {
    setLogisticsFormData((prev) => ({ ...prev, logisticsTypes: { ...prev.logisticsTypes, [id]: !prev.logisticsTypes[id] } }))
  }

  const handleEventDateChange = (date: Date | undefined) => {
    setEventFormData((prev) => ({ ...prev, date: date ?? "" }))
  }

  const handleLogisticsDateChange = (type: "fromDate" | "toDate", date: Date | undefined) => {
    setLogisticsFormData((prev) => ({ ...prev, [type]: date ?? "" }))
  }

  const handleSubmit = async (e: React.FormEvent, formType: "event" | "logistics") => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const formData = formType === "event" ? eventFormData : logisticsFormData
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: formType }),
      })
      if (response.ok) {
        toast.success("Form submitted successfully!")
        if (formType === "event") {
          setEventFormData({ firstname: "", lastname: "", email: "", phone: "", date: "", needs: "", budget: "", guest: "", message: "", eventTypes: {} })
        } else {
          setLogisticsFormData({ firstname: "", lastname: "", email: "", phone: "", fromDate: "", toDate: "", origin: "", destination: "", cargoDetails: "", message: "", logisticsTypes: {} })
        }
      } else {
        toast.error("Failed to submit form. Please try again.")
      }
    } catch (error) {
      console.error(error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Create an Unforgettable Experience</h1>
        <div className="text-sm text-gray-600 space-y-1">
          <p>For general enquires and issues:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <p>Email: <a href="mailto:info@dev-end.org" className="font-medium">info@dev-end.org</a></p>
            <p>Telephone: <a href="tel:+2348068447200" className="font-medium">+234 806 844 7200</a></p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="event" className="w-full mb-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-100">
          <TabsTrigger value="event" className="data-[state=active]:bg-[#2e1a47] data-[state=active]:text-white">Event Management</TabsTrigger>
          <TabsTrigger value="logistics" className="data-[state=active]:bg-[#2e1a47] data-[state=active]:text-white">Logistics Services</TabsTrigger>
        </TabsList>

        <TabsContent value="event">
          <div className="mt-6 text-center mb-8">
            <p className="max-w-2xl mx-auto">For event inquiries, please fill out the form below and one of our team members will get back to you within 24 hours.</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e, "event")} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="firstname">First Name</Label><Input id="firstname" name="firstname" value={eventFormData.firstname} onChange={handleEventChange} placeholder="required*" required /></div>
              <div className="space-y-2"><Label htmlFor="lastname">Last Name</Label><Input id="lastname" name="lastname" value={eventFormData.lastname} onChange={handleEventChange} placeholder="required*" required /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="email">Email Address</Label><Input id="email" name="email" value={eventFormData.email} onChange={handleEventChange} type="email" placeholder="required*" required /></div>
              <div className="space-y-2"><Label htmlFor="phone">Phone Number</Label><Input id="phone" name="phone" value={eventFormData.phone} onChange={handleEventChange} type="tel" placeholder="required*" required /></div>
            </div>
            <div className="space-y-3">
              <Label>Event Type (required)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {eventTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={`event-${type.id}`} checked={eventFormData.eventTypes[type.id] || false} onCheckedChange={() => handleEventTypeChange(type.id)} />
                    <Label htmlFor={`event-${type.id}`} className="font-normal">{type.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      {eventFormData.date ? format(eventFormData.date as Date, "MM/dd/yy") : <span className="text-muted-foreground">mm/dd/yy</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={eventFormData.date as Date | undefined} onSelect={handleEventDateChange} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2"><Label htmlFor="needs">Planning Needs</Label><Input id="needs" name="needs" value={eventFormData.needs} onChange={handleEventChange} placeholder="required*" required /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="budget">Estimated Budget</Label><Input id="budget" name="budget" value={eventFormData.budget} onChange={handleEventChange} placeholder="required*" required /></div>
              <div className="space-y-2"><Label htmlFor="guest">Estimated Guest Count</Label><Input id="guest" name="guest" value={eventFormData.guest} onChange={handleEventChange} placeholder="required*" required /></div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea id="message" name="message" value={eventFormData.message} onChange={handleEventChange} placeholder="Is there anything else that you would like to tell us about your planning needs or vision for your event?" className="min-h-[120px]" />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-[#2e1a47] hover:bg-[#3b2259]">{isLoading ? "Submitting..." : "Submit"}</Button>
          </form>
        </TabsContent>

        <TabsContent value="logistics">
          <div className="mt-6 text-center mb-8">
            <p className="max-w-2xl mx-auto">To provide you with cost estimate for your logistics needs, please fill out the form below and one of our team members will get back to you within 24 hours.</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e, "logistics")} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="l-firstname">First Name</Label><Input id="l-firstname" name="firstname" value={logisticsFormData.firstname} onChange={handleLogisticsChange} placeholder="required*" required /></div>
              <div className="space-y-2"><Label htmlFor="l-lastname">Last Name</Label><Input id="l-lastname" name="lastname" value={logisticsFormData.lastname} onChange={handleLogisticsChange} placeholder="required*" required /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="l-email">Email Address</Label><Input id="l-email" name="email" value={logisticsFormData.email} onChange={handleLogisticsChange} type="email" placeholder="required*" required /></div>
              <div className="space-y-2"><Label htmlFor="l-phone">Phone Number</Label><Input id="l-phone" name="phone" value={logisticsFormData.phone} onChange={handleLogisticsChange} type="tel" placeholder="required*" required /></div>
            </div>
            <div className="space-y-3">
              <Label>Logistics Type (required)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {logisticsTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={`logistics-${type.id}`} checked={logisticsFormData.logisticsTypes[type.id] || false} onCheckedChange={() => handleLogisticsTypeChange(type.id)} />
                    <Label htmlFor={`logistics-${type.id}`} className="font-normal">{type.label}</Label>
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
                      {logisticsFormData.fromDate ? format(logisticsFormData.fromDate as Date, "MM/dd/yy") : <span className="text-muted-foreground">mm/dd/yy</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={logisticsFormData.fromDate as Date | undefined} onSelect={(date) => handleLogisticsDateChange("fromDate", date)} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="toDate">To:</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      {logisticsFormData.toDate ? format(logisticsFormData.toDate as Date, "MM/dd/yy") : <span className="text-muted-foreground">mm/dd/yy</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={logisticsFormData.toDate as Date | undefined} onSelect={(date) => handleLogisticsDateChange("toDate", date)} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label>Origin Location</Label><Input name="origin" value={logisticsFormData.origin} onChange={handleLogisticsChange} placeholder="required*" required /></div>
              <div className="space-y-2"><Label>Destination</Label><Input name="destination" value={logisticsFormData.destination} onChange={handleLogisticsChange} placeholder="required*" required /></div>
            </div>
            <div className="space-y-2"><Label>Cargo Details (If any)</Label><Input name="cargoDetails" value={logisticsFormData.cargoDetails} onChange={handleLogisticsChange} placeholder="placeholder" /></div>
            <div className="space-y-2">
              <Label>Additional Information</Label>
              <Textarea name="message" value={logisticsFormData.message} onChange={handleLogisticsChange} placeholder="Is there anything else that you would like to tell us?" className="min-h-[120px]" />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-[#2e1a47] hover:bg-[#3b2259]">{isLoading ? "Submitting..." : "Submit"}</Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
