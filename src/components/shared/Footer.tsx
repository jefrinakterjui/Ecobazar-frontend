import Image from "next/image";
import Link from "next/link";
import { FaApple, FaCcVisa, FaCcDiscover, FaCcMastercard } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-12 lg:pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-10 gap-x-4 lg:gap-x-8 mb-12 lg:mb-16">

                    <div className="col-span-2 md:col-span-4 lg:col-span-4 lg:pr-8">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/Logow.png"
                                alt="Ecobazar Logo"
                                width={150}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-6 mb-6 max-w-87.5">
                            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
                            dui, eget bibendum magna congue nec.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-white text-sm border-b-2 border-primary pb-0.5 font-medium shrink-0">
                                (219) 555-0114
                            </span>
                            <span className="text-gray-500 text-sm hidden sm:inline">or</span>
                            <span className="text-white text-sm border-b-2 border-primary pb-0.5 font-medium shrink-0">
                                Proxy@gmail.com
                            </span>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h3 className="text-white font-medium text-lg mb-4 lg:mb-5">My Account</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
                            <li><Link href="/order-history" className="hover:text-white transition-colors">Order History</Link></li>
                            <li><Link href="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
                            <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h3 className="text-white font-medium text-lg mb-4 lg:mb-5">Helps</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/faqs" className="hover:text-white transition-colors">Faqs</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Condition</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h3 className="text-white font-medium text-lg mb-4 lg:mb-5">Proxy</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
                            <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
                            <li><Link href="/track" className="hover:text-white transition-colors">Track Order</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h3 className="text-white font-medium text-lg mb-4 lg:mb-5">Categories</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            <li><Link href="/shop/fruit" className="hover:text-white transition-colors">Fruit & Vegetables</Link></li>
                            <li><Link href="/shop/meat" className="hover:text-white transition-colors">Meat & Fish</Link></li>
                            <li><Link href="/shop/bread" className="hover:text-white transition-colors">Bread & Bakery</Link></li>
                            <li><Link href="/shop/beauty" className="hover:text-white transition-colors">Beauty & Health</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Ecobazar eCommerce © 2021. All Rights Reserved
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 text-white opacity-80">
                            <FaApple size={28} />
                            <FaCcVisa size={28} />
                            <FaCcDiscover size={28} />
                            <FaCcMastercard size={28} />

                            <div className="flex items-center gap-1 border border-gray-600 rounded px-2 py-1 ml-2">
                                <CiLock size={14} className="text-white" />
                                <span className="text-[10px] uppercase text-white font-medium leading-tight">Secure<br />Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;