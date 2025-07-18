'use client'
import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Yes! Dev End has been such a great and wonderful event planner. They have made this process as seamless and as easy and as possible. And it was so last minute and we're so grateful to be working with them.",
    author: "Stephnie",
    title: "FERMADEC Group",
  },
  {
    quote: "I want to thank Dev End for what they have done in a short notice, within a short notice. They were able to put this together and it was top-notch. Their services are superb. I thank you very much for meeting all my requirements and giving me what I needed. You have added more sunshine to my event. Thank you.",
    author: "Engr Mary",
    title: "",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="transition-all duration-500 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <div className="p-8 rounded-lg">
              <p className="text-[#211434]/80 text-sm md:text-base mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="font-medium text-[#211434]">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-[#211434]/70">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#2A1C51] w-4' : 'bg-[#211434]/20'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 
