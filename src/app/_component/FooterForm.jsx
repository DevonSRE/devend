"use client";
import React, { useState } from "react";
import { toast } from 'sonner';

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:grid grid-cols-2 gap-4 my-10">
        <div className="mb-8 md:mb-0">
          <label htmlFor="name" className="text-sm text-[#cccccc] block mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#ccc] py-2 outline-none text-white"
          />
        </div>

        <div className="mb-8 md:mb-0">
          <label htmlFor="email" className="text-sm text-[#cccccc] block mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#ccc] py-2 outline-none text-white"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="text-sm text-[#cccccc] block mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#ccc] py-2 outline-none text-white"
          rows="3"
        />
      </div>

      <button
        type="submit"
        className="text-white border-white border px-6 py-3 rounded-lg mt-5"
      >
        Send Message
      </button>
    </form>
  );
};

export default FooterForm;