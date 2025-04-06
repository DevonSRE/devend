'use client'
import React, { useState, useEffect } from 'react'

const testimonials = [
	{
		quote: "We entrusted DEV-END with our annual company-wide conference, a massive undertaking involving hundreds of attendees and complex logistics. They truly understood our vision and brought it to life. I highly recommend them for your corporate events.",
		author: "Johnathan M.",
		title: "CEO, Tech Innovators Inc"
	},
	{
		quote: "The attention to detail and creativity that DEV-END brought to our product launch event was exceptional. From the innovative staging to the seamless coordination, they transformed our vision into an unforgettable experience.",
		author: "Sarah L.",
		title: "Marketing Director, Luxury Brands Co."
	},
	{
		quote: "Working with DEV-END for our charity gala was a game-changer. Their team's dedication and expertise helped us exceed our fundraising goals while creating a memorable evening for all our guests. Simply outstanding!",
		author: "Michael R.",
		title: "Executive Director, Global Hope Foundation"
	}
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