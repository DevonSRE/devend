import React from "react";
import Footer from "../home/footer/page";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center text-[#211434] my-8 px-4">
        <div className="mt-6 text-center max-w-[900px]">
          <h2 className="md:text-5xl text-3xl leading-normal font-semibold">
            Let's Create an Unforgettable Experience
          </h2>
          <p className="mt-3 text-sm px-4">For general enquiries and issues:</p>
          <div className="md:flex justify-center gap-2 mt-1 mb-4">
            <p className="text-sm px-4 mr-2">
              Email: <span className="font-semibold">info@devend.com</span>
            </p>
            <p className="text-sm px-4">
              Telephone:{" "}
              <span className="font-semibold">+234 (803) 000 0000</span>
            </p>
          </div>
          <p className="md:mt-5 mt-3">
            For event inquiries, please fill out the form below and one of our
            team members will get back to youwithin 24 hours.
          </p>
          <ContactForm/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
