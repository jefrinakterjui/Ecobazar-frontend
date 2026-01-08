"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Eye, Lock } from "lucide-react";
import { SlHandbag } from "react-icons/sl";

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
    image: string;
    isSale?: boolean;
    saleTag?: string;
    isBestSale?: boolean;
    status?: "In Stock" | "Out of Stock";
}

const bigDealProduct: Product = {
    id: 1,
    name: "Chinese cabbage",
    price: 12.00,
    oldPrice: 24.00,
    rating: 5,
    image: "/cabbage2.png",
    isSale: true,
    saleTag: "Sale 50%",
    isBestSale: true,
};

const topGridProducts: Product[] = [
    { id: 2, name: "Chinese cabbage", price: 12.00, rating: 5, image: "/cabbage.png" },
    { id: 3, name: "Green Lettuce", price: 9.00, rating: 5, image: "/lettuce.png" },
    { id: 4, name: "Eggplant", price: 34.00, rating: 5, image: "/eggplant.png" },
    { id: 5, name: "Fresh Cauliflower", price: 12.00, rating: 5, image: "/cauliflower.png" },
    { id: 6, name: "Green Capsicum", price: 9.00, oldPrice: 20.00, rating: 5, image: "/capsicum.png", isSale: true, saleTag: "Sale 50%" },
    { id: 7, name: "Green Chili", price: 34.00, rating: 5, image: "/chili.png" },
];

const bottomRowProducts: Product[] = [
    { id: 8, name: "Big Potatoes", price: 12.00, rating: 5, image: "/potato.png" },
    { id: 9, name: "Corn", price: 12.00, rating: 5, image: "/corn.png" },
    { id: 10, name: "Red Chili", price: 12.00, rating: 5, image: "/red-chili.png" },
    { id: 11, name: "Red Tomatos", price: 9.00, oldPrice: 20.99, rating: 5, image: "/tomato.png", isSale: true, saleTag: "Sale 50%" },
    { id: 12, name: "Surjapur Mango", price: 34.00, rating: 5, image: "/mango.png" },
];

const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={12}
                fill={i < rating ? "#FF8A00" : "none"}
                stroke={i < rating ? "none" : "#CCCCCC"}
                className={i < rating ? "text-warning" : "text-gray-300"}
            />
        ))}
    </div>
);

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 23, mins: 34, secs: 57 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
                if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-4 justify-center mt-4 mb-6">
            {Object.entries(timeLeft).map(([unit, value], idx) => (
                <div key={idx} className="text-center">
                    <div className="text-xl font-medium text-gray-900 leading-none">
                        {String(value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] uppercase text-gray-400 mt-1 tracking-wide">
                        {unit.toUpperCase()}
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProductCard = ({ product }: { product: Product }) => (
    <div className="group border border-gray-100 p-4 transition-all duration-300 hover:shadow-lg hover:border-primary bg-white h-full flex flex-col justify-between relative">
        {product.isSale && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-medium px-2 py-1 rounded uppercase">
                {product.saleTag}
            </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        </div>

        <div className="relative w-full h-37.5 flex items-center justify-center">
            <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain h-full w-auto group-hover:scale-105 transition-transform"
            />
        </div>

        <div className="flex justify-between items-end">
            <div>
                <h3 className="text-gray-700 text-sm mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-900 font-medium text-base">
                        ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>
                <RatingStars rating={product.rating} />
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-primary group-hover:text-white transition-colors">
                <SlHandbag size={20} />
            </button>
        </div>
    </div>
);

const HotDeals = () => {
    return (
        <section className="py-12 bg-gray-50/30 font-sans">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Hot Deals</h2>
                    <Link
                        href="/shop"
                        className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                        View All <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">

                    <div className="lg:col-span-1 bg-white border border-primary rounded-lg p-6 shadow-sm relative flex flex-col items-center text-center">

                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            <span className="bg-dark-900 text-white text-xs font-medium px-3 py-1 rounded">
                                Sale 50%
                            </span>
                            <span className="bg-[#2D9CDB] text-white text-xs font-medium px-3 py-1 rounded">
                                Best Sale
                            </span>
                        </div>

                        <div className="relative w-full h-60 my-4 flex items-center justify-center">
                            <Image
                                src={bigDealProduct.image}
                                alt={bigDealProduct.name}
                                width={260}
                                height={260}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex gap-4 mb-3">
                            <button className="text-gray-600 hover:text-primary transition-colors"><Heart size={24} /></button>
                            <button className="text-gray-600 hover:text-primary transition-colors"><Eye size={24} /></button>
                            <button className="text-gray-600 hover:text-primary transition-colors"><Heart size={24} className="fill-transparent stroke-current" /></button>
                        </div>

                        <h3 className="text-gray-900 text-lg font-medium mb-1">{bigDealProduct.name}</h3>
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-xl font-bold text-gray-900">${bigDealProduct.price.toFixed(2)}</span>
                            <span className="text-base text-gray-400 line-through">${bigDealProduct.oldPrice?.toFixed(2)}</span>
                        </div>

                        <div className="mb-3">
                            <RatingStars rating={bigDealProduct.rating} />
                            <p className="text-xs text-gray-500 mt-1">(524 Feedback)</p>
                        </div>

                        <div className="w-full">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Hurry up! Offer ends In:</p>
                            <CountdownTimer />
                        </div>

                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all">
                            Add to Cart <Lock size={18} />
                        </button>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border border-gray-100 bg-white rounded-lg overflow-hidden">
                        {topGridProducts.map((product) => (
                            <div key={product.id} className="border-r border-b border-gray-100 last:border-r-0 md:nth-3:border-r-0">
                                <div className="p-0 h-full">
                                    <ProductCard product={product} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border border-gray-100 bg-white rounded-lg overflow-hidden">
                    {bottomRowProducts.map((product) => (
                        <div key={product.id} className="border-r border-gray-100 last:border-r-0">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HotDeals;