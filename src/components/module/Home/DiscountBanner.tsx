import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BannerData {
    id: number;
    subtitle: string;
    discount: string;
    titleSuffix: string;
    description: string;
    buttonText: string;
    link: string;
    bgImage: string;
}

const bannerData: BannerData = {
    id: 1,
    subtitle: "SUMMER SALE",
    discount: "37%",
    titleSuffix: "OFF",
    description: "Free on all your order, Free Shipping and 30 days money-back guarantee",
    buttonText: "Shop Now",
    link: "/shop",
    bgImage: "/discount-banner-bg.png",
};

const DiscountBanner = () => {
    return (
        <section className="py-8 font-sans">
            <div className="container mx-auto px-4">

                <div className="relative w-full h-62.5 md:h-80 rounded-lg overflow-hidden bg-[#111827]">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src={bannerData.bgImage}
                            alt="Summer Sale Banner"
                            fill
                            className="object-cover object-left"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
                    </div>

                    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start px-6 md:px-12 lg:px-20 z-10 text-center md:text-left">

                        <p className="uppercase text-white text-xs md:text-sm font-medium tracking-wider mb-3">
                            {bannerData.subtitle}
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            <span className="text-warning">{bannerData.discount}</span> {bannerData.titleSuffix}
                        </h2>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-100">
                            {bannerData.description}
                        </p>

                        <Link
                            href={bannerData.link}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-lg hover:shadow-green-900/20 transform hover:-translate-y-0.5"
                        >
                            {bannerData.buttonText} <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiscountBanner;