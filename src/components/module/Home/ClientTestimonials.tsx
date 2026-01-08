"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    comment: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Robert Fox",
        role: "Customer",
        image: "https://cdn.myportfolio.com/34b839f6562dc845f8265e2435b68d97/93650d9a-6c6b-4851-a0fb-8710b068b769_rw_600.jpg?h=e557d75cc2421438b921845048e9e58c",
        rating: 5,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
        id: 2,
        name: "Dianne Russell",
        role: "Customer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9b_u54JNRxi87Sk4eVhIzrB3B8AJAWMNqw&s",
        rating: 5,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
        id: 3,
        name: "Eleanor Pena",
        role: "Customer",
        image: "https://portraitpal.ai/wp-content/uploads/2024/08/corporate-headshot.jpg",
        rating: 5,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
        id: 4,
        name: "Jane Cooper",
        role: "Customer",
        image: "https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1dc1f125-b7d6-4302-8d3b-b25c3dc2a546/Headshot-Photographer-London-UK-Ian-Kobylanki-292.jpg",
        rating: 4,
        comment: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
];

const ClientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsToShow = 3;
    const maxIndex = testimonials.length - itemsToShow;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="py-16 bg-[#F2F2F2] font-sans">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>

                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${currentIndex === 0
                                    ? "bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "bg-primary text-white border-primary hover:bg-primary-dark"
                                }`}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${currentIndex >= maxIndex
                                    ? "bg-white text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "bg-primary text-white border-primary hover:bg-primary-dark"
                                }`}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="w-full md:w-1/2 lg:w-[calc(33.333%-16px)] shrink-0 bg-white p-6 rounded-lg shadow-sm"
                            >
                                <Quote size={32} className="text-primary fill-primary opacity-30 mb-4" />

                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {item.comment}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-semibold text-sm">{item.name}</h4>
                                            <p className="text-gray-400 text-xs">{item.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={`${i < item.rating ? "text-warning fill-warning" : "text-gray-300 fill-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientTestimonials;