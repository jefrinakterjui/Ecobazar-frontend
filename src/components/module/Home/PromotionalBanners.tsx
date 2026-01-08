"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex gap-4 justify-center my-4 text-white">
            {Object.entries(timeLeft).map(([unit, value], index) => (
                <div key={index} className="text-center">
                    <div className="text-xl md:text-2xl font-normal leading-none mb-1">
                        {String(value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] md:text-xs uppercase opacity-80 tracking-wide">
                        {unit}
                    </div>
                </div>
            ))}
        </div>
    );
};

const PromotionalBanners = () => {
    return (
        <section className="py-12 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="relative h-112.5 md:h-125 rounded-lg overflow-hidden flex flex-col items-center pt-10 text-center bg-[#F3F5F9]">

                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/banner-bg-1.png"
                                alt="Sale of the Month"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative z-10 w-full px-4">
                            <p className="uppercase text-white text-xs md:text-sm font-medium tracking-wider mb-2">
                                Best Deals
                            </p>
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                Sale of the Month
                            </h3>

                            <Countdown targetDate="2026-12-31T00:00:00" />

                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-6 py-3 rounded-full mt-4 hover:bg-primary hover:text-white transition-all shadow-md group"
                            >
                                Shop Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-112.5 md:h-125 rounded-lg overflow-hidden flex flex-col items-center pt-10 text-center bg-[#1A1A1A]">

                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/banner-bg-2.png"
                                alt="Low Fat Meat"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative z-10 w-full px-4">
                            <p className="uppercase text-white text-xs md:text-sm font-medium tracking-wider mb-2">
                                85% Fat Free
                            </p>
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                                Low-Fat Meat
                            </h3>
                            <p className="text-white text-lg font-medium mb-6">
                                Started at <span className="text-warning font-bold">$79.99</span>
                            </p>

                            <Link
                                href="/shop/meat"
                                className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-md group"
                            >
                                Shop Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>


                    <div className="relative h-112.5 md:h-125 rounded-lg overflow-hidden flex flex-col items-center pt-10 text-center bg-[#F6D006]">

                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/banner-bg-3.png"
                                alt="Fresh Fruit"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative z-10 w-full px-4">
                            <p className="uppercase text-gray-900 text-xs md:text-sm font-medium tracking-wider mb-2">
                                Summer Sale
                            </p>
                            <h3 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
                                100% Fresh Fruit
                            </h3>
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span className="text-gray-900 font-medium">Up to</span>
                                <span className="bg-gray-900 text-[#F6D006] font-bold px-3 py-1 rounded text-sm">
                                    64% OFF
                                </span>
                            </div>

                            <Link
                                href="/shop/fruit"
                                className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-md group"
                            >
                                Shop Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PromotionalBanners;