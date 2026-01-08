"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  ChevronDown,
  Search,
  Heart,
  PhoneCall,
  Apple,
  Salad,
  Fish,
  Drumstick,
  GlassWater,
  IceCream,
  CakeSlice,
  Milk,
  CookingPot,
  Plus,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { SlHandbag } from "react-icons/sl";

const categories = [
  { name: "Fresh Fruit", icon: Apple, href: "/shop/fresh-fruit" },
  { name: "Vegetables", icon: Salad, href: "/shop/vegetables" },
  { name: "River Fish", icon: Fish, href: "/shop/river-fish" },
  { name: "Chicken & Meat", icon: Drumstick, href: "/shop/meat" },
  { name: "Drink & Water", icon: GlassWater, href: "/shop/water" },
  { name: "Yogurt & Ice Cream", icon: IceCream, href: "/shop/ice-cream" },
  { name: "Cake & Bread", icon: CakeSlice, href: "/shop/cake" },
  { name: "Butter & Cream", icon: Milk, href: "/shop/butter" },
  { name: "Cooking", icon: CookingPot, href: "/shop/cooking" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop", hasDropdown: true },
  { name: "Pages", href: "/pages" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <header className="w-full font-sans relative">
      {/* ================= Top Bar (Hidden on Mobile, Visible on Tablet+) ================= */}
      <div className="hidden md:block bg-dark-900 text-gray-400 text-[12px] py-3">
        <div className="container flex justify-between items-center">
          {/* Left Side: Location */}
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>

          {/* Right Side: Settings & Auth */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              Eng <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              USD <ChevronDown size={14} />
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center gap-1">
              <Link href="/signin" className="hover:text-primary transition-colors">
                Sign In
              </Link>
              <span>/</span>
              <Link href="/signup" className="hover:text-primary transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 lg:py-7 bg-white">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          <div className="w-full lg:w-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/Logo.png"
                alt="Ecobazar Logo"
                width={150}
                height={40}
                className="object-contain lg:w-45"
                priority
              />
            </Link>

            <div className="flex items-center gap-4 lg:hidden">
              <Link href="/cart" className="relative">
                <SlHandbag size={28} className="text-dark-900" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-medium h-4 w-4 rounded-full flex items-center justify-center border border-white">
                  2
                </span>
              </Link>
              <button onClick={toggleMobileMenu} className="text-dark-900 p-1">
                <Menu size={30} />
              </button>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:max-w-150 order-3 lg:order-2">
            <div className="flex items-center border border-gray-100 rounded-md overflow-hidden h-11 lg:h-12">
              <div className="pl-4 pr-2">
                <Search size={20} className="text-dark-900" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 h-full outline-none text-gray-600 text-sm px-2 placeholder:text-gray-500"
              />
              <button className="bg-primary hover:bg-primary-dark transition-colors text-white px-6 lg:px-8 h-full text-sm font-semibold">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Icons (Wishlist & Cart) - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-6 order-3">
            <Link href="/wishlist" className="relative group">
              <Heart
                size={32}
                className="text-dark-900 group-hover:text-primary transition-colors"
              />
            </Link>

            <Link href="/cart" className="flex items-center gap-3 group">
              <div className="relative">
                <SlHandbag
                  size={32}
                  className="text-dark-900 group-hover:text-primary transition-colors"
                />
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-medium h-5 w-5 rounded-full flex items-center justify-center border-[1.5px] border-white">
                  2
                </span>
              </div>
              <div className="hidden xl:block">
                <span className="text-[11px] text-gray-500 block leading-tight">
                  Shopping cart:
                </span>
                <span className="text-sm font-semibold text-dark-900">
                  $57.00
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= Bottom Navigation (Desktop) ================= */}
      <div className="hidden lg:block bg-gray-800 border-t border-b border-gray-100 relative z-40">
        <div className="container flex justify-between items-center h-15">
          <nav>
            <ul className="flex items-center gap-8 font-medium text-sm">
              {navLinks.map((link) => (
                <li key={link.name} className="group relative h-15 flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 transition-colors ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                    {(link.name === "Shop" || link.name === "Pages") && (
                      <ChevronDown size={15} />
                    )}
                  </Link>

                  {/* Dropdown Menu (Desktop Hover) */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-75 bg-white shadow-lg border border-gray-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <ul className="py-2">
                        {categories.map((category) => (
                          <li key={category.name}>
                            <Link
                              href={category.href}
                              className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-primary hover:text-white transition-all"
                            >
                              <category.icon size={20} />
                              <span className="text-sm">{category.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-100 p-2">
                        <Link
                          href="/categories"
                          className="flex items-center justify-center gap-2 text-primary font-medium text-sm py-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <Plus size={16} />
                          View all Category
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <PhoneCall size={20} className="text-white" />
            <span className="text-white font-medium">(219) 555-0114</span>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu Overlay (Drawer) ================= */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Sidebar Content */}
        <div
          className={`fixed top-0 left-0 w-[80%] max-w-75 h-full bg-white shadow-2xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Image
                src="/Logo.png" 
                alt="Ecobazar Logo"
                width={140} 
                height={35}
                className="object-contain"
            />
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-danger">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="p-4 overflow-y-auto h-[calc(100vh-140px)]">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-gray-50 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={!link.hasDropdown ? toggleMobileMenu : undefined}
                      className={`block py-3 text-sm font-medium w-full ${
                        isActive(link.href) ? "text-primary" : "text-gray-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className={`p-2 transition-transform ${
                           mobileSubmenuOpen === link.name ? "rotate-90 text-primary" : "text-gray-400"
                        }`}
                      >
                        <ChevronRight size={18} />
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileSubmenuOpen === link.name ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="bg-gray-50 rounded-md px-3 py-2 mb-2">
                        {categories.map((category) => (
                          <li key={category.name}>
                            <Link
                              href={category.href}
                              onClick={toggleMobileMenu}
                              className="flex items-center gap-3 py-2 text-gray-500 hover:text-primary text-sm"
                            >
                              <category.icon size={18} />
                              {category.name}
                            </Link>
                          </li>
                        ))}
                        <li className="mt-2 border-t border-gray-200 pt-2">
                             <Link
                              href="/categories"
                              onClick={toggleMobileMenu}
                              className="flex items-center gap-2 text-primary font-medium text-xs"
                            >
                              <Plus size={14} />
                              View all Category
                            </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Contact Footer */}
          <div className="absolute bottom-0 left-0 w-full p-5 border-t border-gray-100 bg-gray-50">
             <div className="flex items-center gap-3 text-dark-900">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                    <PhoneCall size={20} />
                </div>
                <div>
                    <span className="text-xs text-gray-500 block">Support 24/7</span>
                    <span className="font-semibold text-sm">(219) 555-0114</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;