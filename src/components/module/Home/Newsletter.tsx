"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Subcribe our Newsletter
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center gap-6 lg:justify-end">
            <form onSubmit={handleSubmit} className="relative w-full max-w-md">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-6 pr-32 rounded-full border border-gray-200 focus:outline-none focus:border-primary text-gray-600 text-sm bg-white placeholder:text-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-12 px-8 bg-primary hover:bg-primary-dark text-white text-sm font-semibold cursor-pointer rounded-full transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary-dark"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-primary transition-all"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-primary transition-all"
              >
                <FaPinterestP size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-primary transition-all"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;