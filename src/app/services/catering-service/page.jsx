'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from "sonner";
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	CalendarIcon,
	Facebook,
	Instagram,
	PinIcon as Pinterest,
} from 'lucide-react';
import { format } from 'date-fns';

import cateringService from '../../../../public/catering-service-1.png';
import TestimonialCarousel from '@/app/_component/TestimonialCarousel';


export default function Page() {
	const [eventDate, setEventDate] = useState(undefined);
	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		date: "",
		needs: "",
		budget: "",
		guest: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [checkedItems, setCheckedItems] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate(values, checkedItems);
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length > 0) return;

		setIsLoading(true);
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				body: JSON.stringify({ ...values, eventTypes: checkedItems }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				toast.success("Message sent successfully!");
				setValues({
					firstname: "",
					lastname: "",
					email: "",
					phone: "",
					date: "",
					needs: "",
					budget: "",
					guest: "",
					message: "",
				});
				setCheckedItems({});
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues(prev => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		setCheckedItems(prev => ({ ...prev, [name]: checked }));
	};

	const validate = (values, checkedItems) => {
		const errors = {};
		if (!values.firstname) errors.firstname = "First name is required";
		if (!values.lastname) errors.lastname = "Last name is required";
		if (!values.email) errors.email = "Email is required";
		if (!values.phone) errors.phone = "Phone number is required";
		if (!values.date) errors.date = "Date is required";
		if (!values.needs) errors.needs = "Planning needs are required";
		if (!values.budget) errors.budget = "Budget is required";
		if (!values.guest) errors.guest = "Guest count is required";

		if (!Object.values(checkedItems).some(Boolean)) {
			errors.eventType = "Please select at least one event type";
		}

		return errors;
	};

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 md:px-6 py-8 md:py-12'>
				<div className='text-center max-w-[660px] mx-auto'>
					<h1 className='text-[#211434] text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-6'>
						Crafting Unforgettable
						<br />
						Corporate Events
					</h1>
					<p className='text-sm md:text-base text-[#211434]/80 max-w-[540px] mx-auto'>
						DEV-END is your trusted partner for crafting unforgettable corporate
						events, from conferences to corporate meetings, seminars and wedding
						events.
					</p>
				</div>
			</section>

			{/* Full Service Event Management */}
			<section className='bg-[#211434] py-12 md:py-16'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='text-center max-w-3xl mx-auto mb-12'>
						<h2 className='text-2xl sm:text-3xl font-semibold mb-6 text-white'>
							Full Service Event Management
						</h2>

						<p className='text-white/80 text-sm md:text-base'>
							From sourcing the ideal venue to the final, thoughtful detail, DEV-END's expertise and creativity ensure your corporate event surpasses expectations and delivers real results. We handle the logistics, so you can focus on the big picture.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
						{[
							'Customized Menus for every occasion.',
							'High quality, Hygienic and Tasty Meals and Bakery.',
							'Onsite and Off- site Catering Services.',
						].map((service) => (
							<div key={service} className='flex items-center gap-4'>
								<div className='bg-[#EDCC19] w-8 h-0.5'></div>
								<span className='text-white text-sm md:text-base'>
									{service}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Help You Succeed Section */}
			<section className='container mx-auto px-4 md:px-6 py-12 md:py-16'>
				<div className='max-w-5xl mx-auto'>
					<div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
						<div className='w-full md:w-1/2'>
							<div className='relative w-full h-72 md:h-96 rounded-lg overflow-hidden'>
								<Image
									src={cateringService}
									alt='An image of a beautifully decorated table'
									fill
									className='object-cover w-full h-full rounded-lg shadow-md'
									priority
								/>
							</div>
						</div>
						<div className='w-full md:w-1/2'>
							<div className='flex items-center gap-3 mb-4'>
								<div className='bg-[#2A1C51] w-8 h-0.5'></div>
								<h2 className='text-2xl sm:text-3xl font-semibold text-[#211434]'>
									We're here to help you succeed.
								</h2>
							</div>
							<p className='text-sm md:text-base text-[#211434]/80'>
								We are your trusted partner in crafting unforgettable corporate
								events. In a world of fleeting moments, we create experiences
								that endure. We work closely with you, understanding your unique
								needs and translating them into events that engage and inspire.
								From concept to completion, we handle every aspect with
								precision and care. Our commitment to excellence ensures that
								your event not only meets but exceeds your expectations, leaving
								a lasting legacy for your brand.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Trusted By Section */}
			<section className='container mx-auto px-4 md:px-6 py-12'>
				<div className='max-w-4xl mx-auto'>
					<div className='flex items-center justify-center gap-4 mb-2'>
						<div className='flex-1 h-0.5 bg-[#211434]/10'></div>
						<h3 className='text-xl sm:text-2xl font-semibold text-center text-[#211434] px-4'>
							Trusted By
						</h3>
						<div className='flex-1 h-0.5 bg-[#211434]/10'></div>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative'>
						<div className='absolute w-full h-0.5 bg-[#211434]/10 -bottom-2'></div>
						{[
							{ title: 'NON-PROFIT ORGANIZATIONS', subtitle: 'Clients' },
							{ title: 'CORPORATE', subtitle: 'Clients' },
							{ title: 'PERSONAL', subtitle: 'Clients' },
						].map((category) => (
							<div key={category.title} className='p-6'>
								<h4 className='text-lg font-semibold mb-2 text-[#211434]'>
									{category.title}
								</h4>
								<p className='text-sm text-[#211434]/70'>{category.subtitle}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className='bg-[#FEFBEC] py-12 md:py-16'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-2xl sm:text-3xl font-semibold mb-8 text-[#211434]'>
							Don't Just Take Our Word For It
						</h2>
						<TestimonialCarousel />
					</div>
				</div>
			</section>

			{/* Booking Form Section */}
			<section className='w-full bg-white py-12 md:py-16'>
				<div className='w-full max-w-4xl mx-auto px-4 md:px-6'>
					<div className='text-center mb-6 md:mb-10'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4'>
							Let&apos;s Create an Unforgettable Experience
						</h2>
						<div className='text-xs sm:text-sm text-gray-600 space-y-1'>
							<p>For general enquires and issues:</p>
							<div className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-8'>
								<p>
									Email:{' '}
									<a href='mailto:info@dev-end.org' className='font-medium hover:text-[#2e1a47]'>
										info@dev-end.org
									</a>
								</p>
								<p>
									Telephone:{' '}
									<a href='tel:+2348030000000' className='font-medium hover:text-[#2e1a47]'>
										+234 (803) 000 0000
									</a>
								</p>
							</div>
						</div>
						<div className='mt-4 text-center'>
							<p className='max-w-2xl mx-auto text-sm sm:text-base'>
								For event inquiries, please fill out the form below and one of our team members will get back to you within 24 hours.
							</p>
						</div>
					</div>

					<form onSubmit={handleSubmit} className='space-y-6 md:space-y-8'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
							<div className='space-y-1.5 md:space-y-2'>
								<Label htmlFor='firstname' className='text-sm sm:text-base'>First Name</Label>
								<Input
									id='firstname'
									name='firstname'
									placeholder='required*'
									value={values.firstname}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.firstname && (
									<p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
								)}
							</div>
							<div className='space-y-1.5 md:space-y-2'>
								<Label htmlFor='lastname' className='text-sm sm:text-base'>Last Name</Label>
								<Input
									id='lastname'
									name='lastname'
									placeholder='required*'
									value={values.lastname}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.lastname && (
									<p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
								)}
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
							<div className='space-y-1.5 md:space-y-2'>
								<Label htmlFor='email' className='text-sm sm:text-base'>Email Address</Label>
								<Input
									id='email'
									name='email'
									type='email'
									placeholder='required*'
									value={values.email}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.email && (
									<p className="text-red-500 text-xs mt-1">{errors.email}</p>
								)}
							</div>
							<div className='space-y-1.5 md:space-y-2'>
								<Label htmlFor='phone' className='text-sm sm:text-base'>Phone Number</Label>
								<Input
									id='phone'
									name='phone'
									type='tel'
									placeholder='required*'
									value={values.phone}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.phone && (
									<p className="text-red-500 text-xs mt-1">{errors.phone}</p>
								)}
							</div>
						</div>

						<div className='space-y-2 md:space-y-3'>
							<Label className='text-sm sm:text-base'>Event Type (required)</Label>
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
								{[
									'Wedding Ceremony',
									'Private Party',
									'Gala Dinner',
									'Celebrating a Milestone/Birthday',
									'Product Launch',
									'Campaign',
									'Fundraising Event',
									'Corporate Event',
									'Conference',
									'Logistics',
									'Others'
								].map((type) => (
									<div key={type} className='flex items-center space-x-2'>
										<Checkbox
											id={`event-${type.toLowerCase().replace(/\s+/g, '-')}`}
											name={`event-${type.toLowerCase().replace(/\s+/g, '-')}`}
											checked={checkedItems[`event-${type.toLowerCase().replace(/\s+/g, '-')}`]}
											onChange={handleCheckboxChange}
										/>
										<Label htmlFor={`event-${type.toLowerCase().replace(/\s+/g, '-')}`} className='text-sm sm:text-base font-normal'>
											{type}
										</Label>
									</div>
								))}
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
							<div className='space-y-2'>
								<Label htmlFor='date' className='text-sm sm:text-base'>Event Date</Label>
								<Popover>
									<PopoverTrigger asChild>
										<Button variant='outline' className='w-full justify-start text-left font-normal'>
											{values.date ? (
												format(typeof values.date === 'string' ? new Date(values.date) : values.date, 'MM/dd/yy')
											) : (
												<span className='text-muted-foreground'>mm/dd/yy</span>
											)}
											<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-auto p-0' align='start'>
										<Calendar
											mode='single'
											selected={typeof values.date === 'string' ? new Date(values.date) : values.date}
											onSelect={(date) => setValues(prev => ({ ...prev, date: date }))}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
							</div>
							<div className='space-y-2'>
								<Label htmlFor='needs' className='text-sm sm:text-base'>Planning Needs</Label>
								<Input
									id='needs'
									name='needs'
									placeholder='required*'
									value={values.needs}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.needs && (
									<p className="text-red-500 text-xs mt-1">{errors.needs}</p>
								)}
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
							<div className='space-y-2'>
								<Label htmlFor='budget' className='text-sm sm:text-base'>Estimated Budget</Label>
								<Input
									id='budget'
									name='budget'
									placeholder='required*'
									value={values.budget}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.budget && (
									<p className="text-red-500 text-xs mt-1">{errors.budget}</p>
								)}
							</div>
							<div className='space-y-2'>
								<Label htmlFor='guest' className='text-sm sm:text-base'>Estimated Guest Count</Label>
								<Input
									id='guest'
									name='guest'
									placeholder='required*'
									value={values.guest}
									onChange={handleChange}
									required
									className='text-sm sm:text-base'
								/>
								{errors.guest && (
									<p className="text-red-500 text-xs mt-1">{errors.guest}</p>
								)}
							</div>
						</div>

						<div className='space-y-2'>
							<Label htmlFor='message' className='text-sm sm:text-base'>Additional Information</Label>
							<Textarea
								id='message'
								name='message'
								placeholder='Is there anything else that you would like to tell us about your planning needs or vision for your event?'
								value={values.message}
								onChange={handleChange}
								className='min-h-[120px] text-sm sm:text-base'
							/>
						</div>

						<Button
							type="submit"
							disabled={isLoading}
							className="w-full sm:w-auto bg-[#2e1a47] hover:bg-[#3b2259] text-white text-sm sm:text-base px-8 py-3"
						>
							{isLoading ? "Sending..." : "Submit"}
						</Button>
					</form>
				</div>
			</section>
		</div>
	);
}
