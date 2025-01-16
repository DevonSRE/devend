import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex justify-center mt-10 text-[#211434] geist-font px-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Services Tailored For You
        </h2>
        <p className="text-base md:max-w-[650px] my-4">
          We offer a range of services tailored to your specific needs. Let us
          help you create an event that leaves a lasting impression.
        </p>

        <div className="my-4">
          <div className="grid md:grid-cols-3 grid-cols-1 mb-3 gap-4">
            <div className="mx-14 md:mx-0 px-10 py-4 rounded-xl md:rounded-lg border border-[#2A1C51]">
              Wedding Ceremony
            </div>
            <div className="mx-20 md:mx-0 px-10 py-4 rounded-xl md:rounded-lg border border-[#2A1C51]">
              Private Parties
            </div>
            <div className="mx-24 md:mx-0 px-10 py-4 rounded-xl md:rounded-lg border border-[#2A1C51]">
              Gala Dinners
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 mb-3 gap-4 px-4">
            <div className="px-6 py-4 rounded-xl md:rounded-lg border border-[#2A1C51]">
              Celebrating Milestones, Birthdays
            </div>
            <div className="mx-14 md:mx-0 px-6 py-4 rounded-xl md:rounded-lg border border-[#2A1C51]">
              Product Launches
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 mb-3 gap-4 px-8">
            <div className="px-6 py-4 rounded-lg border border-[#2A1C51]">
              Organizing Conferences
            </div>
            <div className="px-6 py-4 rounded-lg border border-[#2A1C51]">
              Awareness Campaigns
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 mb-3 gap-4 px-4">
            <div className="px-6 py-4 rounded-lg border border-[#2A1C51]">
              Hosting Fundraising Events
            </div>
            <div className="px-6 py-4 rounded-lg border border-[#2A1C51]">
              Team-Building Events
            </div>
          </div>
        </div>

        <Link href="/services">
          <button className="md:hidden mb-4 bg-[#2A1C51] text-white text-sm font-semibold px-10 py-3 rounded-lg mt-5">
            View Our Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
