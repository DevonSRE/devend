"use client"

import { Loader2Icon } from "lucide-react"
import React, { useActionState, useState } from "react"
import { toast } from "sonner"

interface FooterFormData {
  name: string
  email: string
  message: string
}

interface ActionState {
  success?: boolean
  message?: string
  error?: string
}

const FooterForm = () => {
  const [formData, setFormData] = useState<FooterFormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (_prevState: ActionState | undefined, formData: FormData): Promise<ActionState> => {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      toast.error("Please fill all the fields.")
      return { success: false, message: "Missing fields" }
    }

    const splitNames = name.split(" ")
    if (splitNames.length < 2) {
      toast.error("Please fill in your first name and last name.")
      return { success: false, message: "Missing last name" }
    }

    const payload = {
      email,
      message,
      firstname: splitNames[0],
      lastname: splitNames[1],
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errObj = await response.json()
        throw new Error(errObj.error)
      }
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
      const res = await response.json()
      return { success: true, message: res.message }
    } catch (error) {
      const err = error as Error
      toast.error("Failed to send message. Please try again later.", { description: err.message })
      return { error: err.message, success: false, message: err.message }
    }
  }

  const [state, action, pending] = useActionState(handleSubmit, undefined)

  return (
    <form action={action}>
      <div className="md:grid grid-cols-2 gap-4 my-10">
        <div className="mb-8 md:mb-0">
          <label htmlFor="name" className="text-sm text-[#cccccc] block mb-2">Full Name</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-[#ccc] py-2 outline-none text-white" />
        </div>
        <div className="mb-8 md:mb-0">
          <label htmlFor="email" className="text-sm text-[#cccccc] block mb-2">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-[#ccc] py-2 outline-none text-white" />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="text-sm text-[#cccccc] block mb-2">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-[#ccc] py-2 outline-none text-white" rows={3} />
        {state && JSON.stringify(state)}
      </div>

      <button
        type="submit"
        className="relative flex items-center justify-center overflow-hidden text-white border-white border px-6 py-3 rounded-lg mt-5"
        disabled={pending}
      >
        {pending && (
          <p className="absolute top-0 left-0 bg-brand-dark h-full w-full grid place-content-center">
            <Loader2Icon className="animate-spin" />
          </p>
        )}
        Send Message
      </button>
    </form>
  )
}

export default FooterForm
