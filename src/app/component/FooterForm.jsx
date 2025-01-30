"use client";  
import React, { useState } from "react";  
import { toast } from 'sonner';  

const FooterForm = () => {  
  const [formData, setFormData] = useState({   
    name: "",   
    email: "",  
    message: "",  
  });  

  const handleSubmit = async (e) => {  
    e.preventDefault();  

    // Extract values from contentEditable fields  
    const name = document.getElementById("name").textContent.trim();  
    const email = document.getElementById("email").textContent.trim();  
    const message = document.getElementById("message").textContent.trim();  

    // Check for empty fields  
    if (!name || !email || !message) {  
      toast.error("Please fill all the fields.");  
      return;  
    }  

    // Set form data  
    setFormData({ name, email, message });  

    // Submit form data to the API  
    try {  
      const response = await fetch("/api/send-email", { // Replace with your actual API endpoint  
        method: 'POST',  
        headers: {  
          'Content-Type': 'application/json',  
        },  
        body: JSON.stringify({ name, email, message }),  
      });  

      if (!response.ok) {  
        throw new Error('Network response was not ok');  
      }  

      // Show success message on successful submission  
      toast.success("Message sent successfully!");  

      // Clear the input fields (optional)  
      document.getElementById("name").textContent = '';  
      document.getElementById("email").textContent = '';  
      document.getElementById("message").textContent = '';  
    } catch (error) {  
      // Handle errors  
      toast.error("Failed to send message. Please try again later.");  
      // console.error("Error:", error);  
    }  
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