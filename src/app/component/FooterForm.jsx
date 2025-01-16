"use client";
import React, { useState } from "react";

const FooterForm = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    message: "",
 });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract values from contentEditable fields
    const name = document.getElementById("name").textContent.trim();
    const email = document.getElementById("email").textContent.trim();
    const message = document.getElementById("message").textContent.trim();

    setFormData({ name, email, message });

    console.log("Form Data:", { name, email, message });
    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="md:grid grid-cols-2 gap-4 my-10">
        <div className="mb-8 md:mb-0">
          <p className="text-sm text-[#ccc]">Name</p>
          <div
            id="name"
            className="border-b border-[#ccc] my-3"
            contentEditable="true"
            role="textbox"
            aria-label="Name"
            style={{
              outline: "none",
              cursor: "text",
              padding: "1px 0",
              minHeight: "20px",
            }}
          ></div>
        </div>
        <div className="mb-8 md:mb-0">
          <p className="text-sm text-[#cccccc]">Email</p>
          <div
            id="email"
            className="border-b border-[#ccc] my-3"
            contentEditable="true"
            role="textbox"
            aria-label="Email"
            style={{
              outline: "none",
              cursor: "text",
              padding: "1px 0",
              minHeight: "20px",
            }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-[#cccccc]">Message</p>
        <div
          id="message"
          className="border-b border-[#ccc] my-3"
          contentEditable="true"
          role="textbox"
          aria-label="Message"
          style={{
            outline: "none",
            cursor: "text",
            padding: "1px 0",
            minHeight: "20px",
          }}
        ></div>
      </div>

      <button type="submit" className="text-white border-white border px-6 py-3 rounded-lg mt-5">
        Send Message
      </button>
    </form>
  );
};

export default FooterForm;
