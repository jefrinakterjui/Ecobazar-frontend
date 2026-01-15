/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const hasSeenPopup = localStorage.getItem("newsletter_popup_closed");

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (dontShowAgain) {
            localStorage.setItem("newsletter_popup_closed", "true");
        } else {
            sessionStorage.setItem("newsletter_popup_closed", "true");
        }

        localStorage.setItem("newsletter_popup_closed", "true");
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        handleClose();
    };

    if (!isMounted || !isVisible) return null;

    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300">
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-fade-in-up">

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 p-1 bg-white rounded-full text-gray-500 hover:text-red-500 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="relative hidden md:block h-full min-h-100">
                    <Image
                        src="/news.png"
                        alt="Newsletter"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Subcribe to Our Newsletter
                    </h2>

                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        Subscribe to our newsletter and Save your <span className="text-warning font-bold">20% money</span> with discount code today.
                    </p>

                    <form onSubmit={handleSubscribe} className="w-full relative mb-4">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary text-sm text-gray-700"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-[#009206] text-white font-semibold py-3 px-8 rounded-full transition-all text-sm whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            id="dont-show"
                            checked={dontShowAgain}
                            onChange={(e) => setDontShowAgain(e.target.checked)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="dont-show" className="text-xs text-gray-400 cursor-pointer select-none">
                            Do not show this window
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsletterPopup;